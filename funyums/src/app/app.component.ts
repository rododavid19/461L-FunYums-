import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'funyums';


  selectedLevel;
  data:Array<Object> = [
    {id: 0, name: "name1"},
    {id: 1, name: "name2"}
  ];

  selected(){
    alert(this.selectedLevel.name)
  }
}


