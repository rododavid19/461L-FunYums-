import { Component, OnInit } from '@angular/core';


import {HttpClient} from "@angular/common/http";
import {person} from '../person';
import {AppComponent} from "../app.component";
import {Observable} from "rxjs/index";
import {Recipe} from "../recipe";


@Component({
  selector: 'app-view-favorites',
  templateUrl: './view-favorites.component.html',
  styleUrls: ['./view-favorites.component.css']

})




export class ViewFavoritesComponent implements OnInit {


  recipeNames: any;
  recipeInfo: any;
  User: person;
  favorites: String;
  noFavoritesFlag: String;
  recipe: Recipe;
  newClient: person;
  favs: string[];
  fixedFavs: string[];
  test_user: string;
  warning_flags: String[];
  allFavRecipes: any[];
  displayFavoritesButton : boolean = false;

  noFavoriteFlag: any;





  ngOnInit() {

    this.User = AppComponent.getFromLocal("local");



    if(this.User.favorites == ""  ){

   //   this.test_user = new person();
      // this.test_user.favorites = "TestBurger,t,t";
      // this.favs = this.test_user.favorites.split(",");
      this.test_user = 'TRY ADDING A RECIPE FIRST :)';



    } else{


      this.displayFavoritesButton = true;
      this.getRecipeByID(this.User.favorites);
      console.log(this.allFavRecipes);



    }


  }

  constructor (private httpClient:HttpClient){ }

  getAllRecipes(){
    this.httpClient.get('http://backend-237004.appspot.com/api/username_password/')
      .subscribe(
        (data:any[]) => {
          //console.log(data);
         // this.recipeNames = data;


        }
      )
  }


  getRecipeByID(id: String){


    var recipeID = id.split(",");
    console.log(recipeID);


    this.warning_flags = recipeID;
    this.allFavRecipes = [];


    for(var i = 0; i < this.warning_flags.length-1; i++){
      console.log(this.allFavRecipes[i]);
    }

    console.log(this.warning_flags.length);




    for(var i = 0; i < this.warning_flags.length-1; i++){

      this.httpClient.get('http://api.yummly.com/v1/api/recipe/' + recipeID[i] + '?_app_id=dae14cbd&_app_key=993954829f8356d54ca793f29ea9a14b')
        .subscribe(
          (data : Recipe) => {
            this.allFavRecipes.push(data) ;
            console.log(data);
          }


        )



    }

    AppComponent.saveInLocal("local",this.User);


  }

  deleteFavorite(id: string){


    this.User = AppComponent.getFromLocal("local");

    if(this.User.favorites.includes(id)){

      this.User.favorites = this.User.favorites.replace( id + "," , "");
      console.log("delteing: " + id)
      this.httpClient.patch("http://backend-237004.appspot.com/api/username_password/"+this.User.email,
        {
          "email"     :   this.User.email,
          "rank"      :   this.User.rank,
          "favorites" :   this.User.favorites,
          "fullname"  :   this.User.fullname,
          "ingredients":  this.User.ingredients
        })
        .subscribe(
          data  => {
            console.log("PATCH Request is successful ", data);
            alert("Recipe Deleted!");
            location.reload();

          },
          error  => {


          });
    }
    else{
      alert("Recipe does not exists!");
    }

    AppComponent.saveInLocal("local",this.User);
    console.log("new local " + this.User.favorites)



  }




}

