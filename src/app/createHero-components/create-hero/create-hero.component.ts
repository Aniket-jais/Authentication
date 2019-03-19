import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HeroesService } from "src/app/servies/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-hero",
  templateUrl: "./create-hero.component.html",
  styleUrls: ["./create-hero.component.scss"]
})
export class CreateHeroComponent implements OnInit {
  data = null;
  //heroForm: FormGroup;
  constructor(private _getMe: HeroesService, private _routes: Router) {}
  heroForm = new FormGroup({
    heroName: new FormControl(null),
    heroHeight: new FormControl(null),
    canFly: new FormControl(null),
    heroType: new FormControl(null),
    superPowers: new FormControl(null),
    fanFollowing: new FormControl(null),
    fightsWon: new FormControl(null)
  });

  ngOnInit() {
    this.data = this._getMe.getPresentData();
    this.updateFormData(this.data);

    // console.log(data);
  }
  onSubmit() {
    if(this.heroForm.invalid){
      return;
    }
    if(this.data == null){
      this._getMe.postHeroes(this.heroForm.value).subscribe();
    }
    else
    {
      this._getMe.finalUpdateMy(this.heroForm.value,this.data._id).subscribe();
    }
    // console.log(this.heroForm.value);

    this._routes.navigate(["/heroes"]);
    //alert("Inserted successfully");
  }

  updateFormData(formData){
    this.heroForm = new FormGroup({
      heroName: new FormControl(formData.heroName),
      heroHeight: new FormControl(formData.heroHeight),
      canFly: new FormControl(formData.canFly),
      heroType: new FormControl(formData.heroType),
      superPowers: new FormControl(formData.superPowers),
      fanFollowing: new FormControl(formData.fanFollowing),
      fightsWon: new FormControl(formData.fightsWon)
    });
  }
}
