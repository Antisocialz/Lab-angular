import { Component, OnInit } from '@angular/core';
import {Todo} from "src/app/model/todo";



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})








 export class TodosComponent {
  todos =[
    new Todo('Do the dishes', true ,1),
    new Todo('Do the cleaning', false ,2),
    new Todo('Do the trash', true ,3)
   
  ];

  closeTodo(e) {
    const todo = e.target.parentNode;
    todo.remove();
   
  }

  logcheckbox(todo) {
    console.log(todo)
  }
  
  





}
