import { Component, OnInit } from '@angular/core';
import {Person} from './Person';
import { Router } from '@angular/router';
import {RegisterService} from './register.service'
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



  constructor(private router: Router,private rs:RegisterService){} //private cs: CookieService

      

   

  
   full_name = null;
   username = null;
   email = null;
   password = null;
   data:any;
   responce:any;
  ngOnInit() {
  }

  writetoJSON(){

  }

  onSubmit(){
    console.log("This is person")
    var uname = this.username

    console.log(uname)
    var data2 = {
      uname :{
      'fullname': this.full_name,
      'username': this.username,
      'email':this.email,
      'password':this.password,
      }
     


    }; 
    this.router.navigateByUrl("/splash");
    // this.data =data2
    // this.Users.push(data2);
    // this.submitted = true;
    // this.rs.register(data2).subscribe(res =>{
    //   this.responce = res;

    //   if(res["status code"] == "500"){
    //     console.log("USER EXISTS");
    //     document.getElementById("alert").style.display = "block";
        
    //   }else{
    //     // this.cs.set("user_name",res["user_name"]);
    //     // this.cs.set("full_name",res["full_name"]);
    //     this.router.navigateByUrl("/splash");
    //   }
    
    // },err => {
    //   console.log("Error occured: ", err);
    // });


    // console.log(data2)
    
    // if(this.registerForm.invalid){
    //   return;
    // }


    //console.log(data)
    //this.person = new Person(data.name,data.username,data.password);
    //if(data){
      //this.Users.push(this.person)
    //}
  }

}
