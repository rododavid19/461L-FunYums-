import { Component, OnInit } from '@angular/core';
import {person} from '../person';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import { stringify } from '@angular/core/src/util';

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
  oldIngredient:any;
  newIngredient:any;
  invalidIngredient:boolean = false;
  invalidNewIngredient:boolean = false;


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
    
    if(this.addThisIngredient != null && this.addThisIngredient != undefined && this.addThisIngredient != ""){

    

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
    
    i = 1;
    this.person.ingredients = new_ingred_list[0];
    while(i != new_ingred_list.length){
      this.person.ingredients += ("," + new_ingred_list[i]);
      i++;
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


    AppComponent.saveInLocal("local",this.person);
  }

  }

  addIngredient(){
    console.log(this.addThisIngredient);
    console.log(this.ingredients);
    

    if(this.addThisIngredient != null && this.addThisIngredient != undefined && this.addThisIngredient != ""){


      this.http.get("http://backend-237004.appspot.com/api/ingredients2/"+this.addThisIngredient)
      .subscribe(
      data  => {
      console.log("GET Request is successful ",data);
      var x:any;
      x = data;
      console.log(x.length);  
  
      if(x.length > 0){
        this.person.ingredients += this.addThisIngredient + ",";

        if(this.ingredients == null || this.ingredients == ""){ //if user does not have ingredients 
          this.ingredients = this.addThisIngredient;
          console.log(this.ingredients);
        }
        else { // if they have ingredients 
          this.ingredients = this.ingredients + ", "+this.addThisIngredient;
          console.log(this.ingredients);
        }
    
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
    
                AppComponent.saveInLocal("local",this.person);
                this.invalidIngredient = false;

      }
      else{
        this.invalidIngredient = true;
      }
  
      },
      error  => {
  
      });

    
          }

        }

    editIngredient(){
      if(this.oldIngredient != null && this.oldIngredient != undefined && this.oldIngredient != "" &&
      this.newIngredient != null && this.newIngredient != undefined && this.newIngredient != ""){



        this.http.get("http://backend-237004.appspot.com/api/ingredients2/"+this.newIngredient)
        .subscribe(
        data  => {
        console.log("GET Request is successful ",data);
        var x:any;
        x = data;
        console.log(x.length);  

        if(x.length > 0){
          console.log(this.newIngredient);
          var newIngredientsList = "";
    
          for(let entry of this.person.ingredients.split(",")){
            console.log(entry);
            if(entry != undefined && entry != "" && entry != null){
              if(entry == this.oldIngredient){
                newIngredientsList += this.newIngredient + ",";
              }
              else{
                newIngredientsList += entry + ",";
              }
            }
           
            
          }
    
          this.person.ingredients = newIngredientsList;
    
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
    
          AppComponent.saveInLocal("local",this.person);


    
          this.invalidNewIngredient = false;
        }
        else{
          this.invalidNewIngredient = true;
        }

        },
        error  => {

        });














      


    }

  }
    
}


