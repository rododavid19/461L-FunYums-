import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    AppComponent.saveInLocal("local",null);
    AppComponent.displayLogin = true;
    AppComponent.displayLogout = false;
    this.router.navigateByUrl("/splash");
  }

}
