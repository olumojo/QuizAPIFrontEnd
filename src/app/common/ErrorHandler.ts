import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class ErrorHandler {
     handleError(err: HttpErrorResponse) {
        let errorMessage = '';
       // console.log(err);
        //console.log(err.error.message);
        if (err.error.message != undefined) {
          errorMessage = err.error.message;
        }
        else {
          errorMessage = 'Server has returned an error'
        }
    
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}