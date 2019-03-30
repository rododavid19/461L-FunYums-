import { Component, OnInit } from '@angular/core';
import { database } from '../viewFavoritesMOCK';
import {ApiServiceService} from '../../../src/app/api-service/api-service.service';

@Component({
  selector: 'app-view-favorites',
  templateUrl: './view-favorites.component.html',
  styleUrls: ['./view-favorites.component.css']

})


export class ViewFavoritesComponent implements OnInit {


  constructor(private recipeGetterDB: ApiServiceService) { }
  //myHero = this.heroes[0];

  ngOnInit() {
    this.getAllRecipesDB()
  }

  getAllRecipesDB(): String {
    return "FFF";
  }


}

