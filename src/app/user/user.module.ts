import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserResultComponent } from './user-result/user-result.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component'

@NgModule({
  declarations: [UserComponent, UserHomeComponent, UserResultComponent, UserPreferencesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path : 'user',component:UserComponent}
     
  ])
  ]
})
export class UserModule { }
