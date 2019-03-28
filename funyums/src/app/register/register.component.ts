import { Component, OnInit } from '@angular/core';
import {Person} from './Person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Users= [];
  person:Person;
  submitted= false;



  constructor(private router: Router){} 

      

   

  
   full_name = null;
   username = null;
   email = null;
   password = null;
   data:any;
  ngOnInit() {
  }

  writetoJSON(){
    //var fs = require("fs");


fs.writeFile("./object.json", JSON.stringify(this.data, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
  }

  onSubmit(){
    console.log("This is person")
    var uname = this.username

    console.log(uname)
    var data2 = {
      uname :{
      'fullname': this.full_name,
      //'username': this.username,
      'email':this.email,
      'password':this.password,
      }
     


    }; 
    this.data =data2
    this.Users.push(data2);
    this.submitted = true;
    console.log(data2)
    
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
