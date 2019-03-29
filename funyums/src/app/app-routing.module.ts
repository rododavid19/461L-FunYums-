import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeSearchComponent} from './recipe-search/recipe-search.component';

import { AboutComponent } from './about/about.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import { RewardsComponent } from './rewards/rewards.component';
import {RecipeViewComponent} from './recipe-view/recipe-view.component';
import { ViewFavoritesComponent} from './view-favorites/view-favorites.component';
import { LoginComponent} from './login/login.component';
import { SplashComponent} from './splash/splash.component';


// we need a dashboard component to add here
const routes: Routes = [
  {path: 'search', component: RecipeSearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'account-settings', component:AccountSettingsComponent},
  {path: 'rewards', component:RewardsComponent},
  {path: 'recipe/:id', component: RecipeViewComponent},
  {path: 'favorites', component: ViewFavoritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'splash', component: SplashComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
