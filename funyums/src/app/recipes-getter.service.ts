import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe, SearchResult } from './recipe';
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
  getRecipes(searchParams: string): Observable<Recipe[]> {
    console.log('Getting recipes from Yummly using the parameter ' + searchParams);
    const requestUrl = this.baseUrl + 's' + this.authentication + '&q=' + searchParams;
    console.log(requestUrl);
    // let
    // this.http.get<SearchResult>(requestUrl).subscribe(result => this.result = result);
    // return of(this.result.matches);
    return this.http.get<SearchResult>(requestUrl).pipe(map(res => res.matches));
  }

  /*getAllRecipes(): Observable<Recipe[]> {
    console.log('Getting recipes from Yummly' );
    const requestUrl = this.baseUrl + 's' + this.authentication + '&' + searchParams;
    return this.http.get<Recipe[]>(requestUrl);
  }*/

  getRecipeById(id: string): Observable<Recipe> {
    console.log('Getting recipe with ID: ' + id);
    const requestUrl = this.baseUrl + '/' + id + this.authentication;
    return this.http.get<Recipe>(requestUrl);
  }
}
