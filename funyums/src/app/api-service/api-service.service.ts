import { Injectable } from '@angular/core';
import * as DB from './../../getRecipes-DB';
import {Observable, of} from "rxjs/index";
//import { Recipe } from './../view-favorites/view-favorites.component';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  getAllRecipes(): String[] {
    return DB.getRecipes();
  }

}
