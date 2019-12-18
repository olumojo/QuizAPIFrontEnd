import { HttpInterceptor, HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { IUser } from "../interfaces";


export class TokenInterceptor implements HttpInterceptor {
    private Token:string;
    private _currentUser:IUser;
    
    constructor(private authService: AuthService) { 
        this._currentUser = this.authService.currentUserValue;        
    }
  
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.Token = this._currentUser.token;
        let newHeaders = req.headers;
        if(this.Token) {
            newHeaders.append('authtoken', this.Token);
        }
        const authReq = req.clone({headers:newHeaders});
        return next.handle(authReq);
    }
}