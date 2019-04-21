  import { Component, OnInit } from '@angular/core';
  import { Recipe } from '../recipe';
  import {RecipesGetterService} from '../recipes-getter.service';

  import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
  import { of } from 'rxjs';

@Component({
  selector: 'app-recipe-submit',
  templateUrl: './recipe-submit.component.html',
  styleUrls: ['./recipe-submit.component.css']
})



export class RecipeSubmitComponent implements OnInit {


  constructor(private recipeGetter: RecipesGetterService) { }


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


@Component({
  selector: 'app-recipe-submit',
  templateUrl: './recipe-submit.component.html',
  styleUrls: ['./recipe-submit.component.css']
})
export class AppComponent {
//   form: FormGroup;
//   orders = [];
//
//   ings2excludeExist = false;
//   ings2exclude: string[];
//
//   constructor(private formBuilder: FormBuilder) {
//     this.form = this.formBuilder.group({
//       orders: new FormArray([])
//     });
//
//     // async orders (could be a http service call)
//     of(this.getOrders()).subscribe(orders => {
//       this.orders = orders;
//       this.addCheckboxes();
//     });
//
//     // synchronous orders
//     this.orders = this.getOrders();
//     this.addCheckboxes();
//   }
//
//   private addCheckboxes() {
//     this.orders.map((o, i) => {
//       const control = new FormControl(i === 0); // if first item set to true, else false
//       (this.form.controls.orders as FormArray).push(control);
//     });
//   }
//
//   getOrders() {
//     return [
//       { id: 100, name: 'Cow&#39s Milk' },
//       { id: 200, name: 'Eggs' },
//       { id: 300, name: 'Tree Nuts' },
//       { id: 400, name: 'Peanuts' },
//       { id: 500, name: 'Shellfish' },
//       { id: 600, name: 'Wheat' },
//       { id: 700, name: 'Soy' },
//       { id: 800, name: 'Fish' },
//     ];
//   }
//
//
//   addIng(ingName: string): void {
//     if (ingName === '') {
//       return;
//     }
//     if (this.ings2excludeExist === false) {
//       this.ings2excludeExist = true;
//       this.ings2exclude = [];
//     }
//     this.ings2exclude.push(ingName);
//   }
//
//   removeIng(ingName: string): void {
//     const indx = this.ings2exclude.indexOf(ingName);
//     this.ings2exclude.splice(indx, 1);
//     if (this.ings2exclude.length === 0) {
//       this.ings2excludeExist = false;
//     }
//   }
//
//   // submit() {}
 }



