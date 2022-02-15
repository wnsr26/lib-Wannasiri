import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books : any;
  bookForm!: FormGroup;
  constructor(private service: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      bookName: new FormControl(),
    });
    this.service.getBook().subscribe((res : any)=>{
      this.books = res.data;
    });
  }

  getBookByName(){
    let book = {
     bookName: this.bookForm.value.bookName
    }
    this.service.getBookByName(book).subscribe((res : any)=>{
      this.books = res.data;
      this.router.navigateByUrl('/',{skipLocationChange:true})
      .then(()=> this.router.navigate(['/book']));
    });
  }

  deleteBook(id:any){
    if(confirm("Confirm Delete ?")){
      this.service.deleteBook(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=> this.router.navigate(['/book']));
      });
    }
  }
}
