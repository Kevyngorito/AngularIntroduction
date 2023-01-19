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
    if(this.userInputs.length > 0){
      this.arrNames.push(this.userInputs);
      this.userInputs = "";
    }
    else alert ("Please, fill the blank")
  }

  /*removeName(deleteme:any){
    this.arrNames.splice(deleteme,1)
  } */

  removeName(names:string){
    this.arrNames.splice( this.arrNames.indexOf(names), 1)
  }

}
