import { Component, OnInit } from '@angular/core';
import {AboutService} from "./about.service";
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';
import {Policy} from '../login/policy';
 



interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  gitData:any;
  totalCommits = 0;
  RodoCommits = 0;
  LoriCommits = 0;
  AshkanCommits = 0;
  HadarCommits = 0;
  ShehryarCommits = 0;
  ChristianCommits = 0;

  totalIssues = 0;
  RodoIssues = 0;
  LoriIssues = 0;
  AshkanIssues = 0;
  HadarIssues = 0;
  ShehryarIssues = 0;
  ChristianIssues = 0;

  RodoTests = 0;
  LoriTests = 0;
  AshkanTests = 0;
  HadarTests = 0;
  ShehryarTests = 0;
  ChristianTests = 0;
  totalTests = 0;
  
  constructor(private aboutService: AboutService, private router: Router, private http:HttpClient) { }

  public commits = [];
  public issues = [];

  ngOnInit() {
    this.getGitCommits();
    this.getGitIssues();
    this.getGitTests();
  }

  getGitCommits(){
    this.aboutService.getCommits()
      .subscribe(data => this.commits=data, error => console.log("lol"), () => {
      for(let entry of this.commits){
        if(entry.author.login == "ShayAhmed"){
          this.ShehryarCommits++;
        }
        else if(entry.author.login == "rododavid19"){
          this.RodoCommits++;
        }
        else if(entry.author.login == "ashkanvafaee"){
          this.AshkanCommits++;
        }
        else if(entry.author.login == "lgt359"){
          this.LoriCommits++;
        }
        else if(entry.author.login == "HadarRoze"){
          this.HadarCommits++;
        }
        else{
          this.ChristianCommits++;
        }
        this.totalCommits++;
      }
      });
  }


  getGitIssues(){
    this.aboutService.getIssues()
      .subscribe(data => this.issues=data, error => console.log("lol"), () => {
        
          for(let entry of this.issues){
            if(entry.state == "closed" && entry.assignee != null){
              if(entry.assignee.login == "ShayAhmed"){
                this.ShehryarIssues++;
              }
              else if(entry.assignee.login == "rododavid19"){
                this.RodoIssues++;
              }
              else if(entry.assignee.login == "ashkanvafaee"){
                this.AshkanIssues++;
              }
              else if(entry.assignee.login == "lgt359"){
                this.LoriIssues++;
              }
              else if(entry.assignee.login == "HadarRoze"){
                this.HadarIssues++;
              }
              else{
                this.ChristianIssues++;
              }
              this.totalIssues++;
            }
          }

      });
  }

  getGitTests(){
    this.RodoTests = 2;
    this.LoriTests = 1;
    this.AshkanTests = 2;
    this.HadarTests = 1;
    this.ShehryarTests = 1;
    this.ChristianTests = 2;
    this.totalTests = this.RodoTests + this.LoriTests + this.AshkanTests + this.HadarTests + this.ShehryarTests + this.ChristianTests;

  }



  

}
