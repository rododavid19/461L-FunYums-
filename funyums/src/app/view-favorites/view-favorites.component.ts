import { Component, OnInit } from '@angular/core';
import { database } from '../viewFavoritesMOCK';
import {ViewFavoritesGetterService} from "../view-favorites-getter.service";
import {Policy} from '../login/policy';

@Component({
  selector: 'app-view-favorites',
  templateUrl: './view-favorites.component.html',
  styleUrls: ['./view-favorites.component.css']
})
export class ViewFavoritesComponent implements OnInit {

  members : database;

  constructor(private favoritesGetter: ViewFavoritesGetterService) {



  }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites(): void {
    this.favoritesGetter.getUsers().subscribe(member => this.members);
  }



}
