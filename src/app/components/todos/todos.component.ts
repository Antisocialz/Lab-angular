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
  static todos: any;

  closeTodo(e) {
    const todo = e.target.parentNode;
    todo.remove();
   
  }

  logcheckbox(todo) {
    console.log(todo)
  }
  onSubmit(e) {
    let a = e.target.TODOTODO.value
    this.todos.push(new Todo(a));
   
 }
  // pushTodo() {
  //   e = Element.querySelector(#nique)
  //   this.todos.push(new Todo('ta mere'))
  // }

//   onSubmit(form: NgForm) {
//     const name = form.value['name'];
//     const status = form.value['status'];
// }
//   //  submit() {
//   //    const formAddTab = document.forms['add-tab'];
//   //    formAddTab.addEventListener('submit', (e) => {
//   //     e.preventDefault();
//   //     const userInput = formAddTab.tab.value;
//   //     this.todos.push(new Todo(userInput))
//   //     console.log('waoao')
//   //    });}
   



}
