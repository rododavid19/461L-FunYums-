import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe, RECIPES } from './recipe';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesGetterService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);

  }

  getRecipe(id: string): Observable<Recipe> {
    //console.log(RECIPES.find(recipe => recipe.id === id));
    return of(RECIPES.find(recipe => recipe.id === id));
  }
}
