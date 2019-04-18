import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Recipe, RecipeSearchBar, SearchResult} from './recipe';
import {Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  authentication = '?_app_id=dae14cbd&_app_key=993954829f8356d54ca793f29ea9a14b';
  baseUrl = 'http://api.yummly.com/v1/api/metadata/';

  constructor(private http: HttpClient) { }

  // todo
  validateIngredients(name: string): string{
    return null;
  }
  // todo
  validateDiet(name: string): string[]{
    return null;
  }
  // todo
  validateAllergy(name: string): string[]{
    return null;
  }
}
