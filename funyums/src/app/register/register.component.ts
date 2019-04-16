import { Component, OnInit } from '@angular/core';
import {Person} from './Person';
import { Router } from '@angular/router';
import {RegisterService} from './register.service'
import {Policy} from './policy'
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import { Alert } from 'selenium-webdriver';




//import { CookieService } from 'ngx-cookie-service';
//import { AlertsModule } from 'angular-alert-module';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Users= [];
  person:Person;
  submitted= false;

  policies: Policy[];
  selectedPolicies: Policy = {username:null, password:null};


  constructor(private registerService: RegisterService, private router: Router,private rs:RegisterService, private http: HttpClient){} //private cs: CookieService

      
  
   full_name = null;
   username = null;
   email = null;
   password = null;
   data:any;
   responce:any;
  ngOnInit() {

  }
  public Policy = [];


  writetoJSON(){}
  
  onSubmit(){
    console.log("This is person");
    



      this.http.post("http://backend-237004.appspot.com/api/username_password",
      {
      "username":  this.username,
      "password":  this.password,
      })
      .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      alert("Successfully Registered");
      this.router.navigateByUrl("/splash");
      },
      error  => {
      
      console.log("Error", error);
      alert("Username already exists, please select a different one");

      }
      
      );


    
  }

}
