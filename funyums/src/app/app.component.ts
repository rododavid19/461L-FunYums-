import { Component, Injectable, Inject, OnInit } from '@angular/core';
import {LOCAL_STORAGE, StorageService, StorageServiceModule, WebStorageService} from 'angular-webstorage-service';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent {
  title = 'funyums';

  public static displayLogin;
  public static displayLogout;
  public ref = AppComponent;
  
  constructor(@Inject(LOCAL_STORAGE) private s: StorageService) {
    
     AppComponent.storage = s;
  }

  ngOnInit() {
    console.log("lmao");
    AppComponent.setNav();

  }


  public static setNav(){
    if(AppComponent.getFromLocal("local") != null){
      AppComponent.displayLogin = false;
      AppComponent.displayLogout = true;
    }
    else{
      AppComponent.displayLogin = true;
      AppComponent.displayLogout = false;
    }
  }

  public static storage;

  public static saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
  }

  public static getFromLocal(key): person {
    console.log('recieved= key:' + key);
    console.log(this.storage.get(key));
    return this.storage.get(key);
  } 

  selectedLevel;
  data:Array<Object> = [
    {id: 0, name: "name1"},
    {id: 1, name: "name2"}
  ];

  selected(){
    alert(this.selectedLevel.name)
  }
}




