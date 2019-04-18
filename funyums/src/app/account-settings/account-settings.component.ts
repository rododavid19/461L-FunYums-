import { Component, OnInit } from '@angular/core';
import {Policy} from '../login/policy';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {

    if(Policy.username == null){
      alert('Need to login to do this')
      this.router.navigateByUrl('/login');
    }
    this.uname = Policy.username;
    this.name = Policy.name;
    this.account_rank = Policy.account_rank;
    this.recipes = Policy.recipes;
  }

}
