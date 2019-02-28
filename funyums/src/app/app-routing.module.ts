import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeSearchComponent} from './recipe-search/recipe-search.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component'
import { RewardsComponent } from './rewards/rewards.component';

// we need a dashboard component to add here
const routes: Routes = [
  {path: 'search', component: RecipeSearchComponent},
  {path: 'account-settings', component:AccountSettingsComponent},
  {path: 'rewards', component:RewardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
