import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IUser } from "../common/interfaces";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { ErrorHandler } from "../common/ErrorHandler";

const headers = new HttpHeaders().set('Access-Control-Origin','*').set('Content-Type','application/json');

@Injectable({
    providedIn:'root'
})
export class UserService {
    private url ='user/Register';
   private errorHandler = new ErrorHandler();

    constructor(private httpClient: HttpClient) {

    }

    SaveUser(user:IUser):Observable<IUser> {
        let options = {headers:headers,withCredentials:true};
        return this.httpClient.post<IUser>(this.url,user,options).pipe(catchError(this.errorHandler.handleError));
    }

    
}
