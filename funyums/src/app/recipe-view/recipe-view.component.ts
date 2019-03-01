import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipesGetterService} from '../recipes-getter.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private getter: RecipesGetterService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getter.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  }

}
