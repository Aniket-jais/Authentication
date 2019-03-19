import { Injectable } from '@angular/core';
declare var toaster:any
@Injectable({
  providedIn: 'root'
})
export class ToasterMessService {

  constructor() { }
  Success(title:string,message?:string){
    toaster.Success(title,message);
  }
}
