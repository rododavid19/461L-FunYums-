import { Component, OnInit } from '@angular/core';
import {person} from '../person';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  uname:any;
  name: any;
  account_rank:any;
  recipes:any;
  public person : person;

  constructor(private router: Router) { }

  ngOnInit() {

    if(AppComponent.getFromLocal("local") != null){
      this.person = AppComponent.getFromLocal("local");
    }

    if(this.person.username == null){
      alert('Need to login to do this')
      this.router.navigateByUrl('/login');
    }
    this.uname = this.person.username;
    this.name = this.person.fullname
    this.account_rank = this.person.rank;
    this.recipes = this.person.favorites;
  }

}
