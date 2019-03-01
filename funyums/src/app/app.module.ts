import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { AboutComponent } from './about/about.component';

import { RewardsComponent } from './rewards/rewards.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { ViewFavoritesComponent } from './view-favorites/view-favorites.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    ViewFavoritesComponent,
    SplashComponent,
    LoginComponent,
    CreateAccountComponent,
    AboutComponent,
    RewardsComponent,
    AccountSettingsComponent,
    RecipeViewComponent,
    ViewFavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
