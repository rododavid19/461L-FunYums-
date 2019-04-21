import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';
//import { CookieService } from 'ngx-cookie-service';
import {person} from '../person'
import { Alert } from 'selenium-webdriver';
import {AppComponent} from '../app.component';

declare function myFunction():any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public data:any=[]
  constructor(private router: Router,private loginService:LoginService) { }//private cs: CookieService


  ngOnInit() {}

  public people = [];
  public Person = new person();
  username = null;
  password = null;


  onSubmit(){
    
    console.log("This is person");
    this.loginService.getData()
      .subscribe(data => this.people=data, error => console.log("lol"), () => {
        console.log(this.people);

        for(let entry of this.people){
              if(entry.username == this.username && entry.password == this.password){
              alert("Successfully logged in");
              this.router.navigateByUrl("/splash");
              this.Person.username = entry.username;
              this.Person.password = entry.password;
              this.Person.email = entry.email;
              this.Person.rank = entry.rank;
              this.Person.favorites = entry.favorites;
              this.Person.fullname = entry.fullname;
              
              AppComponent.saveInLocal("local",this.Person);
              AppComponent.displayLogin = false;
              AppComponent.displayLogout = true;

              return;
            }
        }
        alert("Invalid username or password");
      });
  }
  



}
