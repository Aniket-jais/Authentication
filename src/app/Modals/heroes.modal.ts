export class Heroes{
    private heroName : string;
    private heroHeight : number;
    private fanFollowing : number;
    private fightsWon : number;

    constructor(heroName:string,heroHeight:number,fanFollowing:number,fightsWon:number){
        this.heroName = heroName;
        this.heroHeight = heroHeight;
        this.fanFollowing = fanFollowing;
        this.fightsWon = fightsWon;
    }
}