import {Component, Input, OnInit} from '@angular/core';
import {Recipe, RecipeImage} from '../recipe';
import {RecipesGetterService} from '../recipes-getter.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

/* todo
* 1) actually add everything we wanted to add to the page
* 2) style a bit maybe
* 3) make and back buttons
* */


@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  @Input() recipe: Recipe;

  showImage = false;
  imageURL: string;
  calories: string;
  //images: RecipeImage[];
  //recipeObservable: Observable<Recipe>;

  constructor(private getter: RecipesGetterService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRecipe();
    // this.checkForImage();
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getter.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe;
      this.checkForImage(this.recipe.images);
      this.checkForNutrition(this.recipe.nutritionEstimates);
    });
    //this.images = this.recipeObservable.pipe(map(res => res.images));
  }

  checkForImage(images: RecipeImage[]): void {
    //console.log(this.images);
    //this.recipeObservable.subscribe(rec)
    if ((images != null) && (images !== undefined)) {
      if (images.length !== 0) {
        this.showImage = true;
        const image = images[0];
        if ((image.hostedLargeUrl != null) && (image.hostedLargeUrl !== undefined)) {
          this.imageURL = image.hostedLargeUrl;
        } else if ((image.hostedMediumUrl != null) && (image.hostedMediumUrl !== undefined)) {
          this.imageURL = image.hostedMediumUrl;
        } else {
          this.imageURL = image.hostedSmallUrl;
        }
        return;
      }
    }
    this.showImage = false;
  }

  checkForNutrition(nutrition: any[]):void{
    if(nutrition != null){
      for(let entry of nutrition){
        if(entry.attribute == "ENERC_KCAL"){
          this.calories = entry.value;
        }
      }
    }
    if(this.calories == null){
      this.calories = "No calorie data available";
    }

  }
}
