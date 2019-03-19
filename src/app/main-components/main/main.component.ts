import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/servies/sign.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private authListenerSub: Subscription ;
  userIsAuthenticated = false;
  constructor(private service: SignService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.service.getIsAuthenticated();
    this.service.autoAuthUser();

    this.authListenerSub = this.service.getAuthStatusListner().subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }
  logMeOut(){
    this.service.logMeOut();
  }
}
