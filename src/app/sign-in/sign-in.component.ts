import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { SignService} from '../servies/sign.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  private result;
  constructor(private _servieSign: SignService) { }
  mySign(){

    this._servieSign.signIn(this.signInForm.value);
  }


  ngOnInit() {
  }

}


