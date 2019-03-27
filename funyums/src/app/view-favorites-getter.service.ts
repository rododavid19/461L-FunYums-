import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { users, database } from './viewFavoritesMOCK';
import {Observable, of} from 'rxjs';
import {forEach} from "@angular/router/src/utils/collection";


@Injectable({
  providedIn: 'root'
})
export class ViewFavoritesGetterService {


  fake : database;



  getUsers(): Observable<string>{
    this.fake = new database();
    this.fake.members.name = "michael";

    return of(this.fake.members.returnNames());

    
  }


}
