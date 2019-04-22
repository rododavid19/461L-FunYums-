import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Recipe, RecipeSearchBar, SearchResult} from './recipe';
import {Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesGetterService {

  baseUrl = 'http://api.yummly.com/v1/api/recipe';
  authentication = '?_app_id=dae14cbd&_app_key=993954829f8356d54ca793f29ea9a14b';
  result: SearchResult;

  constructor(private http:HttpClient) { }
  getRecipes(searchParams: string, diets: string[]): Observable<RecipeSearchBar[]> {
    let requestUrl = this.baseUrl + 's' + this.authentication;
    if(searchParams !== null && searchParams !==''){
      console.log('Getting recipes from Yummly using the parameter ' + searchParams);
      requestUrl =  requestUrl + '&q=' + searchParams;
    }
    console.log("Current url "+requestUrl);
    if(diets !== null && diets.length !== 0){
      for(let diet of diets){
        requestUrl = requestUrl + "&allowedDiet[]=" + diet;
        console.log("Current url "+requestUrl);
      }
    }
    console.log("Final url "+requestUrl);
    return this.http.get<SearchResult>(requestUrl).pipe(map(res => res.matches));
  }

  /*getRecipes(searchParams: string, exculeIng: string[], allergies: string[], diets: string[]): Observable<RecipeSearchBar[]> {
    console.log('Getting recipes from Yummly using the parameter ' + searchParams);
    const requestUrl = this.baseUrl + 's' + this.authentication + '&q=' + searchParams;
    return this.http.get<SearchResult>(requestUrl).pipe(map(res => res.matches));
  }*/

  getRecipeById(id: string): Observable<Recipe> {
    console.log('Getting recipe with ID: ' + id);
    const requestUrl = this.baseUrl + '/' + id + this.authentication;
    console.log(requestUrl);
    return this.http.get<Recipe>(requestUrl);
  }
}
