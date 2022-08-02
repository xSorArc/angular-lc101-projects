import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Barb L';
  itemList = ['item1', 'item2', 'item3', 'item4'];
  rectangle = {
    length: 10,
    width: 5,
    area: function() {
      return this.length * this.width;
    } 
  }
  // title = 'first-project-replaced';
}
