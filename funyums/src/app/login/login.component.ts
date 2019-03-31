import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';
//import { CookieService } from 'ngx-cookie-service';

declare function myFunction():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private ls:LoginService) { }//private cs: CookieService

  username = null;

  password = null;
  data:any;
  responce:any;
  cookieValue = "UNKNOWN"

  ngOnInit() {
    //myFunction();
    // this.alerts.setMessage('Username or password incorrect','error');
    // this.alerts.setMessage('Success!','success');
    

  }


  onSubmit(){
    
    console.log("This is person")
    var uname = this.username
    var x = document.getElementById("alert");

    x.style.display = "block";
    console.log(uname)
    var data2 = {
      uname :{
      
      'username': this.username,
      'password':this.password
      }
    }; 
    this.data =data2
    //createAlert();
    this.ls.register(data2).subscribe(res =>{
      this.responce = res;
      if(res["status code"] == "404"){
        console.log("USER NO FOUND");
        document.getElementById("alert").style.display = "block";
      }
     
      else if(res["status code"] == "500"){
        console.log("ERROR")
        document.getElementById("alert").style.display = "block";
      
      }else{
        // this.cs.set("user_name",res["user_name"])
        // this.cs.set("full_name",res["full_name"])
        //var splash = "/splash"

        this.router.navigateByUrl("/splash");
      }
    
    },err => {
      console.log("Error occured: ", err);
    });


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
