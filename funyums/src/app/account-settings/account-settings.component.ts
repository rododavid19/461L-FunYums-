import { Component, OnInit } from '@angular/core';
import {person} from '../person';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';

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

  constructor(private router: Router) { }

  ngOnInit() {




    if(AppComponent.getFromLocal("local") != null){
      this.person = AppComponent.getFromLocal("local");
      console.log("person"+this.person);
    }
    

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
      var IngredientsString = this.person.ingredients.split(", ");
      console.log(IngredientsString);
      this.ingredients = IngredientsString;
    }
    if(this.person.favorites == null ||this.person.favorites == ""){

      this.favorites = "";
    }else{
    
      
      console.log(this.person.favorites);
      var listFav = [];
      var FavssString = this.person.favorites.split(", ");
      console.log(FavssString);
      this.favorites = FavssString;
    }



  }

  addIngredient(){
    console.log(this.addThisIngredient);
    console.log(this.ingredients);
    
    if(this.ingredients == null || this.ingredients == ""){ //if user does not have ingredients 
      this.ingredients = this.addThisIngredient;
      console.log(this.ingredients);
    }
    else { // if they have ingredients 
      this.ingredients = this.ingredients + ", "+this.addThisIngredient;
      console.log(this.ingredients);
    }
    
  }

}
