import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeroesComponent } from './heroes-component/heroes/heroes.component';
import { CreateHeroComponent } from './createHero-components/create-hero/create-hero.component';
import { MainComponent } from './main-components/main/main.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule , MatExpansionModule, MatRadioModule, MatSelectModule} from '@angular/material';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {AuthInterceptor} from './servies/auth-interceptor';
import { ContactUsComponent } from './contact-us/contact-us.component';

//import { SignUpComponent } from './sign-up/sign-up.component';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CreateHeroComponent,
    MainComponent,
    SignUpComponent,
    SignInComponent,
    ContactUsComponent,
    //LogOutComponent,
   // SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule


    //ToastModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
