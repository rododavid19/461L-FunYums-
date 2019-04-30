import {Component, Input, OnInit} from '@angular/core';
import {Recipe, RecipeImage} from '../recipe';
import {RecipesGetterService} from '../recipes-getter.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import {person} from '../person';



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

  displayFavoritesButton : boolean = false;
  showImage = false;
  imageURL: string;
  calories: string;
  //images: RecipeImage[];
  //recipeObservable: Observable<Recipe>;
  public person;

  constructor(private getter: RecipesGetterService,
              private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.getRecipe();
    // this.checkForImage();
    if(AppComponent.getFromLocal("local") != null){
      this.displayFavoritesButton = true;
    }
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

  addFavorite(){
    console.log(this.recipe.id);

    if(AppComponent.getFromLocal("local") != null){
      this.person = AppComponent.getFromLocal("local");
      console.log("person"+this.person);
      if(this.person.favorites == null){
        this.person.favorites = "";
      }
    }

    this.person.rank += 5;

    if(!this.person.favorites.includes(this.recipe.id)){
      this.person.favorites += "," + this.recipe.id;
      this.http.patch("http://backend-237004.appspot.com/api/username_password/"+this.person.email,
      {
      "email"     :   this.person.email,
      "rank"      :   this.person.rank,
      "favorites" :   this.person.favorites,
      "fullname"  :   this.person.fullname,
      "ingredients":  this.person.ingredients
      })
      .subscribe(
      data  => {
      console.log("PATCH Request is successful ", data);
      alert("Recipe Added!");
    
      },
      error  => {


      });
  }
  else{
    alert("Recipe already exists!");
  }

  AppComponent.saveInLocal("local",this.person);



  }
}
