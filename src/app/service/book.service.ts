import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = `${environment.serviceUrl}/book` 
  constructor(private http: HttpClient) { }

  getBook(): any{
    return this.http.get<any>(this.url);
  }

  //Get By Id
  getBookById(id : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

  getBookByName(name : any){
    let getUrl = `${this.url}/name/${name}`;
    return this.http.get<any>(getUrl);
  }

  //Add Book
  addBook(book : any){
    let getUrl = `${this.url}/add`;
    return this.http.post<any>(getUrl, book)
      .pipe(map((res)=>{
        return res;
      }));
  }

  //Update Book
  updateBook(book : any,id : any){
    let getUrl =`${this.url}/${id}`;
    return this.http.put<any>(getUrl, book)
      .pipe(map((res)=>{
        return res;
      }));
  }

  //Delete Book
  deleteBook(id: any){
    let getUrl = `${this.url}/${id}`
    return this.http.delete<any>(getUrl);
  }
}
