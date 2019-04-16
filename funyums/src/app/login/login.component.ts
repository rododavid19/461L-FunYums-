import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';
//import { CookieService } from 'ngx-cookie-service';
import {Policy} from './policy';
import { Alert } from 'selenium-webdriver';

declare function myFunction():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService) { }//private cs: CookieService

  username = null;

  password = null;
  data:any;
  responce:any;
  cookieValue = "UNKNOWN"

  ngOnInit() {
  }

  public Policy = [];

  onSubmit(){
    
    console.log("This is person");
    this.loginService.getData()
      .subscribe(data => this.Policy=data, error => console.log("lol"), () => {
        console.log(this.Policy);

        for(let entry of this.Policy){
              if(entry.username = this.username && entry.password == this.password){
              alert("Successfully logged in");
              this.router.navigateByUrl("/splash");
              Policy.username = entry.username;
              Policy.password = entry.password;
              return;
            }
        }
        alert("Invalid username or password");
      });
  }
  



}
