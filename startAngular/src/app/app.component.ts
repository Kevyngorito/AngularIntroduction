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

  
 
  public ageInput: number = 0;
  //public arrNames = ['Marco', 'Peter', 'Pedro', 'Juliana', 'Felipe'];


    


    personList = [
    {name: 'João', age: 10},
    {name: 'Paulo', age: 15},
    {name: 'Maria', age: 0},
    {name: 'Carlos', age: 20}
  ]
  
  //Inicia a variável nameInput para fazer conexão com o html do que o usuário inserir
   nameInput: string = "";
   

   
 


  insertUserAction(){

    //variável dentro de uma classe vira um ATRIBUTO DA CLASSE
    //Criando uma variável person para "absorver" o objeto
    const person = 
      {
      name: this.nameInput, //atribuição de valor a chave name, capturando o input do usuário na parte do html
      age: this.ageInput //atribuição de valor a chave age, capturando o input do usuário na parte do html
    }

    

    //Adicionando elemento na última posição da lista com o push e tendo como parâmetro a variável person
    //Que comporta o objeto composto por name e age
    this.personList.push(person);

    this.resetFields();

    
   
  
    

  }

  resetFields() {
     //Zera o estado dos campos para "vazio"
     this.nameInput = "";
     this.ageInput = 0;
  }
  /*removeName(deleteme:any){
    this.arrNames.splice(deleteme,1)
  } */
  
  removeName(names:any){
    this.personList.splice(this.personList.indexOf(names), 1)
  }

}

/* 
  Ao inserir qualquer separador no campo name (,-.) popular os nomes na coluna nome e repetir a mesma idade na coluna age

*/
