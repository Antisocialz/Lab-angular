import { Component, OnInit } from '@angular/core';
import {Todo} from "src/app/model/todo";
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from "src/app/components/todos/todos.component";
@Component({
  
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {





// onSubmit(form: NgForm) {

//   console.log(TodosComponent.todos)
//   TodosComponent.todos.push(new Todo())
// // new Todo (form.value);
//   console.log(Todo)
// }



}