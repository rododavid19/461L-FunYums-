import { Component, OnInit } from '@angular/core';
import {person} from '../person';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  public person : person;
  public fullname : String;

  constructor() { 
    console.log("in constructor");
    if(AppComponent.getFromLocal("local") != null){
      this.person = AppComponent.getFromLocal("local");
    }
    if(this.person != null){
      this.fullname = this.person.fullname;
      this.fullname += ",";
    }


  }

  

  ngOnInit() {
    console.log("in init");
    
    
  }

}
