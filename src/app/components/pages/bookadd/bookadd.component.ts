import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from "src/app/service/book.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-book',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class NewBookComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(private ps: BookService, private router:Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      book_id: new FormControl(),
      name: new FormControl(),
      author: new FormControl(),
      publisher: new FormControl(),
      price: new FormControl()
    });
  }

  addBook(){
    let book = {
      book_id: this.bookForm.value.book_id,
      name: this.bookForm.value.name,
      author: this.bookForm.value.author,
      publisher:this.bookForm.value.publisher,
      price:this.bookForm.value.price
    };
    this.ps.addBook(book).subscribe(res=>{
      console.log(res);
      this.router.navigate(["/book"]);
    });
  }

}
