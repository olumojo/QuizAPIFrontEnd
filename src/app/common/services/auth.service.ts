import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { IUser } from '../interfaces';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandler} from '../ErrorHandler';
import { IAuth } from '../auth';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';

const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .set('Content-Type','application/json');

           // 
@Injectable({
    providedIn:'root'
})
export class AuthService implements OnInit {
    private url = '/user/Authenticate';
    //private loggedIn = new BehaviorSubject<boolean>(false); 
    private currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;

 
     errorHandler: ErrorHandler = new ErrorHandler();
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
   constructor(private http: HttpClient, private router: Router){
     this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
     this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
}



   login(userDetails: IAuth):Observable<IUser> {
    let options = {headers: headers,withCredentials:true};
    return this.http.post<IUser>(this.url,userDetails,options).pipe(tap(
        user=>{
        this.currentUserSubject.next(user)
        //console.log(user);
        if(user) {
            console.log(user.token);
            localStorage.setItem('currentUser',JSON.stringify(user));
            //var users = JSON.parse(localStorage.getItem('currentUser'));  

        }
        
        
        }),catchError(this.errorHandler.handleError));
       /*   {if(user && user.Token){
            console.log(JSON.stringify(user));
            localStorage.setItem('currentUser',JSON.stringify(user));
            this.currentUserSubject.next(user);
            console.log(this.currentUserSubject.value); } }),catchError(this.errorHandler.handleError))*/
            
       
    
   }
   logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}


   get isLoggedIn() : boolean {
       var user = JSON.parse(localStorage.getItem('currentUser'));      
      return !!user;   
   }
}
