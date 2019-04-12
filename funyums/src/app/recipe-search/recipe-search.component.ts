import { Component, OnInit } from '@angular/core';
import { RecipeSearchBar } from '../recipe';
import {RecipesGetterService} from '../recipes-getter.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  recipes: RecipeSearchBar[];
  recipesShow = false;
  showAdvance = false;
  onlyMyIng = false;
  ings2excludeExist = false;
  ings2exclude: string[];
  allergiesExist = false;
  allergies: string[];
  dietsExist = false;
  diets: string[];

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
      // need to add a condition for undefined
      if (this.recipes != null && this.recipes.length === 0 ) {
        this.recipesShow = false;
      } else {
        this.recipesShow = true;
      }
    }
  }


  // this also needs to make sure that the input is valid
  addIng(ingName: string): void {
    if (ingName === '') {
      return;
    }
    if (this.ings2excludeExist === false) {
      this.ings2excludeExist = true;
      this.ings2exclude = [];
    }
    this.ings2exclude.push(ingName);
  }

  removeIng(ingName: string): void {
    const indx = this.ings2exclude.indexOf(ingName);
    this.ings2exclude.splice(indx, 1);
    if (this.ings2exclude.length === 0) {
      this.ings2excludeExist = false;
    }
  }

  // this also needs to make sure that the input is valid
  addAllergy(allergyName: string): void {
    if (allergyName === '') {
      return;
    }
    if (this.allergiesExist === false) {
      this.allergiesExist = true;
      this.allergies = [];
    }
    this.allergies.push(allergyName);
  }

  removeAllergy(allergyName: string): void {
    const indx = this.allergies.indexOf(allergyName);
    this.allergies.splice(indx, 1);
    if (this.allergies.length === 0) {
      this.allergiesExist = false;
    }
  }

  // this also needs to make sure that the input is valid
  addDiet(dietName: string): void {
    if (dietName === '') {
      return;
    }
    if (this.dietsExist === false) {
      this.dietsExist = true;
      this.diets = [];
    }
    this.diets.push(dietName);
  }

  removeDiet(dietName: string): void {
    const indx = this.diets.indexOf(dietName);
    this.diets.splice(indx, 1);
    if (this.diets.length === 0) {
      this.dietsExist = false;
    }
  }

}
