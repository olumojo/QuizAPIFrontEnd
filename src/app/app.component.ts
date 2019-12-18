import { Component,OnInit, OnChanges } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { Subscription } from 'rxjs';
import { IUser } from './common/interfaces';
import { Router,NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnChanges {
  navbarOpen = false;
  title = 'ProductTest';
  loggedIn = false;
  currentUser: IUser;
  currentUserSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
        /* if(event instanceof NavigationStart) {
              console.log('I start changing')
          }
          if(event instanceof NavigationEnd) {
            console.log('I end changing');
             
        } */
        this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
          this.currentUser = user;
          console.log(this.currentUser);
      });

  }
   
  ngOnInit() {
   
  }

  ngOnChanges() {
   
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }
  logout() : void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

 get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  } 

  get isAdministrator(): boolean {
    if(this.currentUser && this.currentUser.userRoleResources) {
      if(this.currentUser.userRoleResources.some(x=>x.roleDescription=="Administrator" || x.roleDescription=="Super Administrator")) {
        return true;
      }
    }
    return false;
  }

 
}
