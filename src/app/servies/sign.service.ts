

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SignUp} from '../Modals/signUp';
import {Observable, Subject} from 'rxjs';
import {SignIn} from '../Modals/signIn';
import { tokenKey } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  isAuthenticated = false;
  private authStatusListner = new Subject<boolean>();
  token: string;
  private tokenTimer: any;
  constructor(private _serviceHttp:HttpClient) { }
  getIsAuthenticated(){
    return this.isAuthenticated;
  }
  getAuthStatusListner(){
    return this.authStatusListner.asObservable()
  }
  mySignUp(value){
    alert("ddd");
    return this._serviceHttp.post<{token: string}>("http://localhost:3000/postForm",value).subscribe(data=>{
      const token1 = data.token;
      console.log(token1);
    });
  }

  signIn(data){
    return this._serviceHttp.post<{token: string, expiresIn: number}>("http://localhost:3000/postSignIn",data).subscribe(response => {
      const token = response.token;
      this.token = token;
      if(token){
        this.authStatusListner.next(true);
        this.isAuthenticated = true;
        console.log(this.token);
        console.log("aniket");
        //console.log(response.expiresIn);
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000 );
        this.saveAuthData(token, expirationDate);
        console.log(expirationDate);
      }

    })
  }

  private setAuthTimer(duration: number){
    this.tokenTimer = setTimeout(() => {
      this.logMeOut();
    }, duration * 1000 );
  }
  getToken(){
    return this.token;
  }
  logMeOut(){
    return this._serviceHttp.post("http://localhost:3000/logOutAll",{}).subscribe(  response => {
      console.log(response);
      if(response){
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListner.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
      }
      //console.log(this.token);
    } )
  }
  autoAuthUser(){
    const authInformation = this.getAuthData();
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListner.next(true);

    }
  }
  private saveAuthData(token: string, expirationDate: Date){
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString())
  }

  private clearAuthData(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData(){
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if(!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

}
