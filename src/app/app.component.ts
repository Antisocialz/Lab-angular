import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular2';
  titleForBook = "vive les frites";
  Descrition = " ";
  book =" ";


  getBookSelected(e) {
    this.book = e.title
    this.Descrition = e.preview
    console.log(e)
  }
}
