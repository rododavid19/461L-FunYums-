import { Component, OnInit } from '@angular/core';
import {person} from '../person';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor() { }

  public person : person;
  public fullname : String;

  ngOnInit() {
    if(AppComponent.getFromLocal("local") != null){
      this.person = AppComponent.getFromLocal("local");
    }
    if(this.person != null){
      this.fullname = this.person.fullname;
    }
    
  }

}
