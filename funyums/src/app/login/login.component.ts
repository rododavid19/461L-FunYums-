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

<<<<<<< HEAD
  ngOnInit() {
    console.log("wow")
    console.log("username: " +Policy.username);
    if (!(Policy.username == null)){
      alert('Alreay logged in');
      this.router.navigateByUrl("/account-settings");
    }
  }
=======
  public people = [];
  public Person = new person();
  username = null;
  password = null;
>>>>>>> 654f88209e37f6fdf67787de599612a05a2f8f07


  onSubmit(){
<<<<<<< HEAD
    try{
      console.log("This is person");
      this.loginService.getData()
        .subscribe(data => this.Policy=data, error => console.log("lol"), () => {
          console.log(this.Policy);

          for(let entry of this.Policy){
                if(entry.username == this.username && entry.password == this.password){
                alert("Successfully logged in");
                this.router.navigateByUrl("/splash");
                Policy.username = entry.username;
                Policy.password = entry.password;
                return;
              }
          }
          alert("Invalid username or password");
        });
    }catch{
        console.log('there was an error')
    }
}
=======
    
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
>>>>>>> 654f88209e37f6fdf67787de599612a05a2f8f07
  



}
