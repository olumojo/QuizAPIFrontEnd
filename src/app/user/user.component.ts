import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { IUser } from '../common/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private Name:string;
  private _currentUser:IUser;
  constructor(private authService: AuthService) { 

  }

  ngOnInit() {
   this._currentUser = this.authService.currentUserValue;
   console.log("I am in user componenet");
   console.log(this._currentUser);
   this.Name = this._currentUser.firstName;
  }

}
