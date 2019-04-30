  import { Component, OnInit } from '@angular/core';
  import { Recipe } from '../recipe';
  import {RecipesGetterService} from '../recipes-getter.service';
  import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
  import {AppComponent} from '../app.component';
  import {person} from '../person';


  import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
  import { of } from 'rxjs';

@Component({
  selector: 'app-recipe-submit',
  templateUrl: './recipe-submit.component.html',
  styleUrls: ['./recipe-submit.component.css']
})



export class RecipeSubmitComponent implements OnInit {

  public recipesShow;
  public person;

  public recipeName : String;
  public instructions : String;
  public ingredients : String;

  constructor(private http:HttpClient,private recipeGetter: RecipesGetterService) { }

  public setName(event){
    this.recipeName = event.target.value;
  }
  public setInstructions(event){
    this.instructions = event.target.value;
  }

  public saveRecipe(){
    console.log(this.recipeName);
    console.log(this.instructions);
    this.ingredients = "";

    for(let entry of this.ings2exclude){
      console.log(entry);
      this.ingredients += entry;
      this.ingredients += ",";
    }

    this.http.post("http://backend-237004.appspot.com/api/recipes",
    {
    "name"     :   this.recipeName,
    "ingredients"      :  this.ingredients,
    "directions" :   this.instructions,
    })
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);


    },
    error  => {
    });

    
    this.person = AppComponent.getFromLocal("local");
    this.person.rank += 10;

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
   alert("Rank increased by 10 points!");

  }


  submitted = false;

  //onSubmit() { this.submitted = true; }


  ngOnInit() {
  }

  form: FormGroup;
  orders = [];

  ings2excludeExist = false;
  ings2exclude: string[];


  initSearch: string;



  private addCheckboxes() {
    this.orders.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }

  getOrders() {
    return [
      { id: 100, name: 'Cow&#39s Milk' },
      { id: 200, name: 'Eggs' },
      { id: 300, name: 'Tree Nuts' },
      { id: 400, name: 'Peanuts' },
      { id: 500, name: 'Shellfish' },
      { id: 600, name: 'Wheat' },
      { id: 700, name: 'Soy' },
      { id: 800, name: 'Fish' },
    ];
  }


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
    // if (this.ings2exclude.length === 0) {
    //   this.ings2excludeExist = false;
    // }
  }

  saveLocalState(): void{
    if(this.initSearch !== ''){
      localStorage.removeItem('SearchBar');
      localStorage.setItem('SearchBar', JSON.stringify(this.initSearch));
    }
  }



}

  const orders = [
    { id: 1, name: 'Cow&#39s Milk' },
    { id: 2, name: 'Eggs' },
    { id: 3, name: 'Tree Nuts' },
    { id: 4, name: 'Peanuts' },
    { id: 5, name: 'Shellfish' },
    { id: 6, name: 'Wheat' },
    { id: 7, name: 'Soy' },
    { id: 8, name: 'Fish' },
  ];




