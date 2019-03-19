import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{SignService} from './sign.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private _signService: SignService){}

  intercept(req: HttpRequest<any>,next:HttpHandler){
    const  authToken = this._signService.getToken();
    console.log(authToken);
    const  authRequest = req.clone({
      headers: req.headers.set('authorization', 'Bearer ' + authToken)
    })
    return next.handle(authRequest);
  }
}
