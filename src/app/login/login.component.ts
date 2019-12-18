import { IUser } from '../common/interfaces';
import { AuthService } from './../common/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { IAuth } from '../common/auth';
import { Router } from '@angular/router';
//import {Item} from '../models/item';

import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginDetails: IAuth;
 currentUser:  IUser;
 errorMessage: string;
 userName: string;
 password:string;
  constructor(private authService: AuthService, private router: Router) { 

  }

  ngOnInit() {
  }

  login() : void {
    this.loginDetails = new IAuth();
    this.loginDetails.UserName = this.userName;
    this.loginDetails.Password = this.password;

    this.authService.login(this.loginDetails).pipe().subscribe(
      user =>{
        this.currentUser = user
        if(this.currentUser != null)
        {
          //console.log(this.currentUser);
          var users = JSON.parse(localStorage.getItem('currentUser'));  
          //console.log(users);
           this.router.navigate(['/user']);
        }
        else{
          this.errorMessage = 'Please enter a user name and password.';
        }
        //console.log(this.currentUser);
      },
      error => this.errorMessage = <any>error
      ); 
  }

  logout() : void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
