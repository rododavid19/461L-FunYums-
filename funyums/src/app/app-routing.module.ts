import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeSearchComponent} from './recipe-search/recipe-search.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component'
import { RewardsComponent } from './rewards/rewards.component';
import {RecipeViewComponent} from './recipe-view/recipe-view.component';
import { ViewFavoritesComponent} from './view-favorites/view-favorites.component';
import { RecipeSubmitComponent} from './recipe-submit/recipe-submit.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SplashComponent } from './splash/splash.component';
import { RegisterComponent } from './register/register.component';

// we need a dashboard component to add here
const routes: Routes = [
  {path: 'search', component: RecipeSearchComponent},
  {path: 'favorites', component: ViewFavoritesComponent},
  {path: 'submit', component: RecipeSubmitComponent},
  {path: 'account-settings', component:AccountSettingsComponent},
  {path: 'rewards', component:RewardsComponent},
  {path: 'recipe/:id', component: RecipeViewComponent},
  {path: 'favorites', component: ViewFavoritesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'splash', component: SplashComponent},
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

