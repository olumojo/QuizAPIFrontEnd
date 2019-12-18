import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of} from 'rxjs'
import { ICountry, IUser } from '../../common/interfaces'
import { ErrorHandler} from '../ErrorHandler';
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class DataService {
    Countries: ICountry[];
    private url = '/country/GetAll';
    errorHandler: ErrorHandler = new ErrorHandler();

    constructor(private httpClient: HttpClient) {

    }

    getCountry(): Observable<ICountry[]> {
        if(this.Countries){
            return of(this.Countries);
        }
        else{
            return this.httpClient.get<ICountry[]>(this.url).pipe(tap(
                country => 
                {
                    this.Countries = country;
                    console.log(JSON.stringify(country));
                }),
            catchError(this.errorHandler.handleError));
        }
    }

  /*   getRole(): Observable<string[]> {
        return this.httpClient.get<string[]>(this.url);
    }
    getUsers(): Observable<IUser[]> {
        return this.httpClient.get<IUser[]>(this.url);
    } */
}