import { Component,OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from "src/app/model/book";
import { BookService } from 'src/app/services/book.service';

// @Component({
//   selector: 'app-books',
//   templateUrl: './books.component.html',
//   styleUrls: ['./books.component.scss']
// })
// export class BooksComponent {
//   books :  Array<Book> = [ ];

//     bookService = new BookService()


  @Component({
       selector: 'app-books',   templateUrl: './books.component.html',   styleUrls: ['./books.component.scss'] }) 
       export class BooksComponent implements OnInit { 
 @Input()
    title: string;
  
  @Output()
      bookSelected = new EventEmitter<Book>();


           books: Array<Book> = [];  
                  constructor(     private bookService: BookService,     ){       this.books = this.bookService.books;           }     
                   ngOnInit(){    
                        console.log('ngOnInit')      
                         this.books = this.bookService.books;  
                           } 
                           
    selectBook(b) {
     this.bookSelected.emit(b);
    }                       





            
  }


// constructor(){  
//   this.books = this.bookService.books;
// }  
//   }
  




