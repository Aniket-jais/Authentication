

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
   RouterStateSnapshot,
   UrlTree ,
  CanActivate,
  Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SignService} from './sign.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:SignService, private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //throw new Error("Method not implemented.");
    const authenticatedUser = this._authService.getIsAuthenticated();
    if(!authenticatedUser){
      this.router.navigate(['signIn']);
    }
    return authenticatedUser;
  }



}



