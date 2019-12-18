import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule} from '@angular/common';

import { LoginComponent } from './login.component';
import { ControlsModule } from '../controls/controls.module';



@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ControlsModule,
        RouterModule.forChild([
            {path : 'login',component:LoginComponent},
            {path : 'register', component:RegisterComponent}
        ])
    ],
    
})
export class LoginModule{

}