import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RewardsComponent } from './rewards/rewards.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { ViewFavoritesComponent } from './view-favorites/view-favorites.component';
import { RecipeSubmitComponent } from './recipe-submit/recipe-submit.component';

import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AboutService } from './about/about.service';
import {HashLocationStrategy} from '@angular/common'
import { LocationStrategy } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { StorageServiceModule, WebStorageService } from 'angular-webstorage-service';
import { LogoutComponent } from './logout/logout.component';

//import { CookieService } from 'ngx-cookie-service';




const ROUTES: Route[] = [
  { path: '', component: SplashComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    ViewFavoritesComponent,
    RecipeSubmitComponent,
    SplashComponent,
    LoginComponent,
    CreateAccountComponent,
    AboutComponent,
    RewardsComponent,
    AccountSettingsComponent,
    RecipeViewComponent,
    ViewFavoritesComponent,
    RegisterComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    StorageServiceModule
  
  

  ],
  providers: [AboutService, {provide: LocationStrategy, useClass: HashLocationStrategy},LoginService,RegisterService],
  bootstrap: [AppComponent]




})
export class AppModule { }
