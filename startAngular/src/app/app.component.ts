import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startAngular';
  
  items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifith one"
  ];
}
