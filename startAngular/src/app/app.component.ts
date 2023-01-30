import { AppRoutingModule } from './app-routing.module';
import { Component } from '@angular/core';
import { userInfo } from 'os';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  UserName:string = "Enter UserName"

  
 
  public ageInput:Number = 0;
  //public arrNames = ['Marco', 'Peter', 'Pedro', 'Juliana', 'Felipe'];

  
 
    person = [
    {name: 'João', age: 10},
    {name: 'Paulo', age: 15},
    {name: 'Maria', age: 0},
    {name: 'Carlos', age: 20}
  ]
  

   nameInput: any = "";

 


  insertUserAction(){
   
    let person: object = []

    person = [
      {name: 'João', age: 10},
      {name: 'Paulo', age: 15},
      {name: 'Maria', age: 0},
      {name: 'Carlos', age: 20}
    ]
    
     // this.information.push(this.nameInput);

    this.person.push(this.nameInput)     
     
      
<<<<<<< HEAD
     this.information.push(this.nameInput)
=======
>>>>>>> 92786ff43961abce0a458f2a77204be908ac11b8
     
     
     
     
    
  
    

  }
  /*removeName(deleteme:any){
    this.arrNames.splice(deleteme,1)
  } */
  
  removeName(names:any){
    this.person.splice(this.person.indexOf(names), 1)
  }

}
