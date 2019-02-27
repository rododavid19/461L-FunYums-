import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import {RecipesGetterService} from '../recipes-getter.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeGetter: RecipesGetterService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    //console.log(this.recipes);
    this.recipeGetter.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

}
