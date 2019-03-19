import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  userChoice = '';


  constructor() { }


  contactUsForm = new FormGroup({
    userName : new FormControl(),
    email: new FormControl(),
    choice: new FormControl(),
    query: new FormControl(),
    feedback: new FormControl(),
  } );

  ngOnInit() {
  }
  fuc(){
    //alert("dd");
    const finalChoice = this.userChoice

  }

}
