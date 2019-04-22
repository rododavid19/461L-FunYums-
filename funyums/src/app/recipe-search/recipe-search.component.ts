import { Component, OnInit } from '@angular/core';
import { RecipeSearchBar } from '../recipe';
import {RecipesGetterService} from '../recipes-getter.service';
import {ValidatorService} from '../validator.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  /* todo
  * 1) make calls to yummly dictionary API to verify the inputs in filter
  * 2) need to save results from API because they're needed for making the GET call
  * 3) need to add functionality of filters
  * 4) need to save filters to localStorage as well
  * 5) add pages (should also be saved to local storage)
  * 6) validity service
  * */


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
  initSearch: string;
  dietError = false;
  allergyError = false;

  constructor(private recipeGetter: RecipesGetterService, private validator: ValidatorService) { }

  ngOnInit() {
    this.initSearch = JSON.parse(localStorage.getItem('SearchBar'));
    localStorage.removeItem('SearchBar');
    if(this.initSearch === undefined){
      this.initSearch = '';
    }
    if(this.initSearch !== '' && this.initSearch != null) {
      this.getRecipes(this.initSearch);
    }
  }

  getRecipes(searchParams: string): void {
    this.initSearch = searchParams;
    console.log('Asking service for recipes with search parameters: ' + searchParams);
    const dietParams = this.prepDietSearch();
    console.log('using search params'+ dietParams);
    this.recipeGetter.getRecipes(searchParams, dietParams).subscribe(recipes => this.recipes = recipes);
      // need to add a condition for undefined
      if (this.recipes != null && this.recipes.length === 0 ) {
        this.recipesShow = false;
      } else {
        this.recipesShow = true;
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
    const validated = this.validator.validateDiet(dietName);
    if( validated == null){
      this.dietError = true;
      return;
    }
    if (this.dietsExist === false) {
      this.dietsExist = true;
      this.diets = [];
    }
    this.dietError = false;
    this.diets.push(validated[0]);
  }

  removeDiet(dietName: string): void {
    const indx = this.diets.indexOf(dietName);
    this.diets.splice(indx, 1);
    if (this.diets.length === 0) {
      this.dietsExist = false;
    }
  }

  saveLocalState(): void{
    if(this.initSearch !== ''){
      localStorage.removeItem('SearchBar');
      localStorage.setItem('SearchBar', JSON.stringify(this.initSearch));
    }
  }

  prepDietSearch(): string[]{
    if (this.dietsExist !== false){
      if( this.diets.length !== 0){
        let dietParams = [];
        for( let diet of this.diets){
          const realParam = this.validator.validateDiet(diet)[1];
          dietParams.push(realParam);
        }
        return dietParams;
      }
    }
    return null;
  }
}
