import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from "src/app/service/book.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-edit-book',
    templateUrl: './bookedit.component.html',
    styleUrls: ['./bookedit.component.css']
})
export class EditBookComponent implements OnInit {
    id: any;
    bookForm!: FormGroup;
    currentBook: any;
    constructor(private service: BookService, private router: Router, private activatedRouter: ActivatedRoute) { }
    ngOnInit(): void {
      this.bookForm = new FormGroup({
        bookId: new FormControl(),
        name: new FormControl(),
        author: new FormControl(),
        publisher: new FormControl(),
        price: new FormControl()
      });
  
      this.activatedRouter.params.subscribe(params=>{
        this.id = params['id'];
      });
  
      this.service.getBookById(this.id).subscribe((res)=>{
        this.currentBook = res.data;
        this.bookForm.controls['bookId'].setValue(this.currentBook.bookId);
        this.bookForm.controls['name'].setValue(this.currentBook.name);
        this.bookForm.controls['author'].setValue(this.currentBook.author);
        this.bookForm.controls['publisher'].setValue(this.currentBook.publisher);
        this.bookForm.controls['price'].setValue(this.currentBook.price);
      });
    }
  
    updateBook(){
      let book = {
        bookId:this.bookForm.value.bookId,
        name:this.bookForm.value.name,
        author:this.bookForm.value.author,
        publisher:this.bookForm.value.publisher,
        price:this.bookForm.value.price
      };
  
      this.service.updateBook(book, this.id).subscribe((res)=>{
        window.alert("Edit Complete!");
        this.router.navigate(["/book"]);
      });
    }
  
  }
