import { Component } from '@angular/core';
import { filter } from 'rxjs';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  UserName:string = "Enter UserName"

 
  public ageInput:Number = 0;
  //public arrNames = ['Marco', 'Peter', 'Pedro', 'Juliana', 'Felipe'];
  public information: any [] = [
    {name: "João", age: 10},
    {name: "Paulo", age: 15},
    {name: "Maria", age: 0},
    {name: "Carlos", age: 20}
  ]
  public nameInput:string = "";

  public infoName: any [] = []
  public infoAge: number [] = []


  insertUserAction(){
   
    if(this.nameInput.length > 0){
     // this.information.push(this.nameInput);

     
      
     this.information.push(this.nameInput)
     
     
     
    }
  
    else alert("Fill the blank")

  }
  /*removeName(deleteme:any){
    this.arrNames.splice(deleteme,1)
  } */
  
  removeName(names:string){
    this.information.splice( this.information.indexOf(names), 1)
  }

}
