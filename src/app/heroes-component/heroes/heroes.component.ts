import { Component, OnInit } from '@angular/core';
import { HeroesService} from '../../servies/heroes.service'
import{Router} from '@angular/router';
//import {ToasterMessService} from '../../toaster/toaster-mess.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public geta = [];
  constructor(private _getMe:HeroesService,
              private _router:Router,) { }

  ngOnInit() {
    this._getMe.getHeroes().subscribe(data => this.geta = data);


    // this._getMe.Refresh.subscribe(()=>{
    //   this.getAllTheData();
    // });

    // this.getAllTheData();
  }
  // getAllTheData(){
  //   this._getMe.getHeroes().subscribe(data => this.geta = data);
  // }
  delete(hero) {
    this._getMe.myDelete(hero._id).subscribe();
    this._router.navigate(['/heroes']);
    alert("DELETED successfully");
   // this._toaster.Success("Deleted successfully");
  }
  edit(hero){
    this._getMe.myEdit(hero);
    this._router.navigate(['/createHeroes']);

  }



}
