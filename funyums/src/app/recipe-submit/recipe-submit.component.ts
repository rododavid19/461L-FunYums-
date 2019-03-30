  import { Component, OnInit } from '@angular/core';
  import { Recipe } from '../recipe';
  import {RecipesGetterService} from '../recipes-getter.service';

@Component({
  selector: 'app-recipe-submit',
  templateUrl: './recipe-submit.component.html',
  styleUrls: ['./recipe-submit.component.css']
})
export class RecipeSubmitComponent implements OnInit {

  item:string;
  constructor() {
    this.item = 'hello';
  }

  submitted = false;

  onSubmit() { this.submitted = true; }


  ngOnInit() {
  }


}
