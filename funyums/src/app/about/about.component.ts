import { Component, OnInit } from '@angular/core';
import {AboutService} from "./about.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  gitData:any;
  gitDataNumber = 0;
  
  constructor(private aboutService: AboutService, private router: Router) { }

  ngOnInit() {
    this.getGitData();
  }
  getGitData(){
    
    this.aboutService.getAbout().subscribe((data:any) => {//data:any is what is returned
      console.log("here");
      this.gitData = data;
      
      for(var x in data){
        this.gitDataNumber++;
      }
      console.log('Data requested ... ');
      console.log(this.gitDataNumber);
    });
console.log("got data "+this.gitDataNumber)
  }

}
