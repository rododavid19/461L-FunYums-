import { Component, OnInit } from '@angular/core';
import {person} from '../person';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  uname:any;
  name: any;
  account_rank:any;
  favorites:any;
  public person : person;
  ingredients: any;
  addThisIngredient:any;

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {

    if(AppComponent.getFromLocal("local") != null){
      this.person = AppComponent.getFromLocal("local");
      console.log("person"+this.person);
    }
    if(this.person.ingredients == null){
      this.person.ingredients = "";
    }
    


    /*
    if(this.person.email == null){
      alert('Need to login to do this')
      this.router.navigateByUrl('/login');
    }
    this.uname = this.person.email;
    this.name = this.person.fullname
    this.account_rank = this.person.rank;
    this.ingredients = this.person.ingredients;

    if(this.person.ingredients == null ||this.person.ingredients == ""){

      this.ingredients = "";
    }else{
    
      
      console.log(this.person.ingredients);
      var listIngredients = [];
      var IngredientsString = this.person.ingredients.split(",");
      console.log(IngredientsString);
      this.ingredients = IngredientsString;
    }
    if(this.person.favorites == null ||this.person.favorites == ""){

      this.favorites = "";
    }else{
    
      
      console.log(this.person.favorites);
      var listFav = [];
      var FavssString = this.person.favorites.split(",");
      console.log(FavssString);
      this.favorites = FavssString;
    }

    */

  }

  removeIngredient(){
    console.log(this.addThisIngredient);
    console.log(this.ingredients);
    
    var ingred_list = this.person.ingredients.split(",");
    var has_ingred = false;
    var new_ingred_list = []
    var i = 0;

    while(i != ingred_list.length){
      if (ingred_list[i] == this.addThisIngredient){
        has_ingred = true;
      }else{
        new_ingred_list.push(ingred_list[i]); //add all ingredients except the one you are removing
      }
      i++;
    }
    
    i = 0;
    this.person.ingredients = new_ingred_list[0];
    while(i != new_ingred_list.length){
      this.person.ingredients += ("," + new_ingred_list[i]);
    }

    console.log(this.person.ingredients);

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
        
            
            },
            error  => {
      

            });




  }

  addIngredient(){
    console.log(this.addThisIngredient);
    console.log(this.ingredients);
    

    this.person.ingredients += this.addThisIngredient + ",";

    /*if(this.ingredients == null || this.ingredients == ""){ //if user does not have ingredients 
      this.ingredients = this.addThisIngredient;
      console.log(this.ingredients);
    }
    else { // if they have ingredients 
      this.ingredients = this.ingredients + ", "+this.addThisIngredient;
      console.log(this.ingredients);
      */

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
        
            
            },
            error  => {
      

            });




    }
    
}


