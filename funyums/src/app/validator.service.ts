import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diet, DIETS} from './yummly_params';

import {Recipe, RecipeSearchBar, SearchResult} from './recipe';
import {Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  backEndURL ='hhttps://backend-237004.appspot.com/api/ingredients/apple/exists';


  constructor(private http: HttpClient) { }

  // todo
  validateIngredients(name: string): string{
    return null;
  }
  // todo
  validateDiet(name: string): string[]{
    name = name.toLowerCase();
    let trueName = '';
    let searchParam = '';
    for(let diet of DIETS){
      if(diet.shortDescription.toLowerCase() === name){
        trueName = diet.shortDescription;
        searchParam = diet.searchValue;
        break;
      }
    }
    if ( trueName !== ''){
      return [trueName, searchParam];
    } else{
      return null;
    }
  }
  // todo
  validateAllergy(name: string): string[]{
    return null;
  }
}
