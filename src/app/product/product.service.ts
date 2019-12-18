import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../common/product';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandler} from '../common/ErrorHandler';

const headers = new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class productService {
  private url = 'http://localhost:50324/v1/products';
  private callback = 'callback';
  errorHandler: ErrorHandler = new ErrorHandler();

  constructor(private httpClient: HttpClient) {

  }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.url,{withCredentials:true}).pipe(tap(data => 
      console.log(JSON.stringify(data))),catchError(this.errorHandler.handleError));
   
  }

}
