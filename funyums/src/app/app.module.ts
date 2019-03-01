import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { ViewFavoritesComponent } from './view-favorites/view-favorites.component';
import { RecipeSubmitComponent } from './recipe-submit/recipe-submit.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    ViewFavoritesComponent,
    RecipeSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
