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
  recipesShow = false;

  constructor(private recipeGetter: RecipesGetterService) { }

  ngOnInit() {
    // this.getRecipes();
  }

  getRecipes(searchParams: string): void {
    if (searchParams === '') {
      console.log('No parameters specified');
      this.recipesShow = false;
    } else {
      console.log('Asking service for recipes with search parameters: ' + searchParams);
      this.recipeGetter.getRecipes(searchParams).subscribe(recipes => this.recipes = recipes);
      if ( this.recipes.length === 0 ) {
        this.recipesShow = false;
      } else {
        this.recipesShow = true;
      }
    }
  }

  /*getRecipes(txt: string): void {
    console.log(txt);
    this.recipeGetter.getRecipes().subscribe(recipes => this.recipes = recipes);
  }*/

}
