import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeSearchComponent} from './recipe-search/recipe-search.component';
import { ViewFavoritesComponent} from './view-favorites/view-favorites.component';

// we need a dashboard component to add here
const routes: Routes = [
  {path: 'search', component: RecipeSearchComponent},
  {path: 'favorites', component: ViewFavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
