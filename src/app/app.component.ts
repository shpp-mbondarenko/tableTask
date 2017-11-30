import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const cells = document.getElementsByTagName('td');
    console.log(cells);
  }

  labelsList = ['Label1', 'Label2', 'Label3', 'Label4'];
  numOfRows = 7;
}
