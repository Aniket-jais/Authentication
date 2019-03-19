import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateHeroComponent} from './createHero-components/create-hero/create-hero.component'
import {HeroesComponent} from './heroes-component/heroes/heroes.component'
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthGuard} from './servies/auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  {path:'heroes', component:HeroesComponent},
  {path:'createHeroes', component:CreateHeroComponent, canActivate:[AuthGuard]},
  { path: 'signUp' , component: SignUpComponent  },
  { path: 'signIn' , component: SignInComponent },
  { path: 'logOut' , component: SignInComponent },
  { path: 'contactUs' , component: ContactUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

export const routingComponents = [HeroesComponent,CreateHeroComponent];
