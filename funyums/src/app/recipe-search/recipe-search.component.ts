import { Component, OnInit } from '@angular/core';
import { RecipeSearchBar } from '../recipe';
import {RecipesGetterService} from '../recipes-getter.service';
import {ValidatorService} from '../validator.service';
import {AppComponent} from '../app.component';
import {HttpClient} from '@angular/common/http';
import {allergyList, dietList, ingList} from './fileInputs';


@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],


})
export class RecipeSearchComponent implements OnInit {


  recipes: RecipeSearchBar[];
  recipesShow = false;
  showAdvance = false;
  initSearch: string;
  courseType: string;
  cuisineType: string;
  checkBox = false;
  displayCheckBox = false;

  ingredient_list: ingList;
  diet_list: dietList;
  allergy_list: allergyList;
  constructor(private recipeGetter: RecipesGetterService, private validator: ValidatorService, private http: HttpClient) { }

  ngOnInit() {
    // init search bar
    this.initSearch = JSON.parse(localStorage.getItem('SearchBar'));
    localStorage.removeItem('SearchBar');
    if (this.initSearch === undefined) {
      this.initSearch = '';
    }


    this.displayCheckBox = false;
    if (AppComponent.getFromLocal('local') != null) {
      this.displayCheckBox = true;
    }

    this.ingredient_list = new ingList(this.validator);
    this.diet_list = new dietList(this.validator);
    this.allergy_list = new allergyList(this.validator);

    if (this.initSearch != '' && this.initSearch != null) {
      this.getRecipes(this.initSearch);
    }
  }


  getRecipes(searchParams: string): void {
    this.initSearch = searchParams;
    console.log('Asking service for recipes with search parameters: ' + searchParams);
    const dietParams = this.diet_list.prepSearch();
    console.log('using search params' + dietParams);
    const allergyParams = this.allergy_list.prepSearch();
    this.recipeGetter.getRecipes(searchParams, dietParams, allergyParams, this.courseType, this.cuisineType, this.checkBox, this.ingredient_list.list).subscribe(recipes => this.recipes = recipes);
    if (this.recipes != null && this.recipes.length === 0 ) {
        this.recipesShow = false;
      } else {
        this.recipesShow = true;
      }
    }

  saveLocalState(): void {
    if (this.initSearch !== '') {
      localStorage.removeItem('SearchBar');
      localStorage.setItem('SearchBar', JSON.stringify(this.initSearch));
    }
  }

  checked() {
    if (this.checkBox) {
      this.checkBox = false;
    } else {
      this.checkBox = true;
    }
  }

  addIng(name: string): void {
    let nm;
    if (name !== '') {
      this.http.get('http://backend-237004.appspot.com/api/ingredients2/' + name)
        .subscribe(
          data  => {
            console.log('GET Request is successful ', data);
            let x: any;
            x = data;
            if (x.length > 0) {
              this.ingredient_list.error = false;
              nm = name;
              this.ingredient_list.addToList(name);
            } else {
              this.ingredient_list.error = true;
              nm = null;
            }
          },
          error  => {});
    } else { nm = null; }
  }
}

