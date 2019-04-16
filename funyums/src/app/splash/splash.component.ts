import { Component, OnInit } from '@angular/core';
import {Policy} from '../login/policy';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(Policy.username);
  }

}
