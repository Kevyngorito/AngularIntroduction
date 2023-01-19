import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  UserName:string = "Enter UserName"

  public userInputs = "";
  public arrNames = ['Marco', 'Peter', 'Pedro', 'Juliana', 'Felipe'];

  insertUserAction(){
    this.arrNames.push(this.userInputs);
    this.userInputs = "";
  }

}
