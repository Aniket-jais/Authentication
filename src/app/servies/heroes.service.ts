import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject, from } from "rxjs";
import { IHeroes } from "../herroes";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  // private _refresh = new Subject<void>();

  // get Refresh() {
  //   return this._refresh;
  // }

  private updateData = new BehaviorSubject(null);
  presentData = this.updateData.asObservable();



  constructor(private _http: HttpClient) {}

  // getHeroes(): Observable<IHeroes[]> {
  //   return this._http.get<IHeroes[]>("http://localhost:3000/getHero").pipe(
  //     tap(() => {
  //       this._refresh.next();
  //     })
  //   );
  // }
  getHeroes(): Observable<IHeroes[]> {
    return this._http.get<IHeroes[]>("http://localhost:3000/getHero");
  }

  postHeroes(hero): Observable<IHeroes[]> {
    return this._http.post<IHeroes[]>("http://localhost:3000/postHero", hero);
  }

  myDelete(event): Observable<{}> {
    //console.log(event);
    return this._http.delete(`http://localhost:3000/deleteHero/${event}`);
  }

  myEdit(event) {
    //console.log(event);
    this.updateData.next(event);
    // console.log(this.updateData);;
    // console.log(this.presentData);
  }

  getPresentData() {
    return this.updateData.value;
  }
  finalUpdateMy(myData, id) {
    //alert("aniket");
    //console.log(myData._id);
    return this._http.put(`http://localhost:3000/putHero/${id}`, myData);
  }
}
