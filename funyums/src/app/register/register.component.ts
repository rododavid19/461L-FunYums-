import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from './register.service'
import {person} from '../person'
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



  constructor(private registerService: RegisterService, private router: Router,private rs:RegisterService, private http: HttpClient){} //private cs: CookieService

  ngOnInit() {

  }
  public username;
  public password;
  public email;
  public fullname;
  public rank = 1;
  public favorites = null;


  
  onSubmit(){
    console.log("This is person");
    



      this.http.post("http://backend-237004.appspot.com/api/username_password",
      {
      "username"  :   this.username,
      "password"  :   this.password,
      "email"     :   this.email,
      "rank"      :   this.rank,
      "favorites" :   this.favorites,
      "fullname"  :   this.fullname,
      })
      .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      alert("Successfully Registered");
      this.router.navigateByUrl("/login");
      },
      error  => {
      
      console.log("Error", error);
      alert("Username already exists, please select a different one");

      }
      
      );


    
  }

}
