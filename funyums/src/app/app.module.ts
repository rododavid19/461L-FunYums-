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


@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    AboutComponent,
    RewardsComponent,
    AccountSettingsComponent,
    RecipeViewComponent,
    ViewFavoritesComponent
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
