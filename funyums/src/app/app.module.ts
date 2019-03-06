import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RewardsComponent } from './rewards/rewards.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { ViewFavoritesComponent } from './view-favorites/view-favorites.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AboutService } from './about/about.service';
import { HelloComponent } from './hello/hello.component';
import { HelloService } from './hello/hello.service';



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
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [AboutService,HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
