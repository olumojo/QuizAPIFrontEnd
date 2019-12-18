import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DataService } from 'src/app/common/services/data.service';
import { ICountry, IUser } from 'src/app/common/interfaces';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

function passwordTheSame(control: AbstractControl) : {[key:string]:boolean | null} {
  let passwordControl = control.get('password');
  let passwordConfirmControl = control.get('confirmPassword');
  if(passwordControl.pristine || passwordConfirmControl.pristine) {
    console.log('is getting null');
    return null;
  }

  if(passwordConfirmControl.value === passwordControl.value){
    console.log('validated');
    console.log(control.valid);
    console.log(passwordConfirmControl.value);
    console.log(passwordControl.value);
    return null;
  }
  console.log(control.errors);
  return {'passwordNotEqual': true};
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Countries: ICountry[];
//Countries = [];
Genders = ['Male','Female'];
recoveryQuestions = ['What is your pet name','What is your Mothers maiden name'];
registerForm:FormGroup;
user: IUser;

get passwords() {
  return this.registerForm.get('passwords'); 
}

  constructor(private fb: FormBuilder, private dataService: DataService,
              private userService: UserService,
              private router:Router) { }

  ngOnInit() {

    this.user = {
      id:0,
      firstName :null,
      LastName:null,
      UserName:null,
      DateOfBirth: null,
      Address: null,
      Password:null,
      token:null,
      Email:null,
      AddressId:null,
      CreatedBy:null,
      ModifiedBy:null,
      IsVisible:true,
      IsActive: true,
      RecoveryQuestionsId : null,
      SecretAnswer: null,
      userRoleResources : []
      };
     
    this.dataService.getCountry().subscribe(cnt => {
      console.log(cnt[0].description);
      this.Countries = cnt;
    });
    this.registerForm =this.fb.group({
      firstName:['',Validators.required],
      lastName: ['',Validators.required],
      dateOfBirth: ['', Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      userName:['',[Validators.minLength(6),Validators.required]],
      passwords: this.fb.group({
        password:['', [Validators.required,Validators.minLength(6)]],
        confirmPassword:['', [Validators.required,Validators.minLength(6)]]
      },{validator: passwordTheSame}),
      recoveryQuestion:'',
      secretAnswer:'',
      addressLine1:'',
      addressLine2:'',
      addressLine3:'',
      city:'',
      county:'',
      postCode:'',
      countrys:''
    });

    //this.registerForm.controls['countrys'].setValue(this.defaultCountry, {onlySelf : true});
    //this.registerForm.controls['recoveryQuestion'].setValue(this.defaultRecoveryQuestions, {onlySelf : true});
  }

  save() {
   if(this.registerForm.valid) {
     if(this.registerForm.dirty) {
       const regForm = {...this.user,...this.registerForm.value};
       console.log(this.registerForm.get('dateOfBirth'));
       this.userService.SaveUser(regForm).subscribe(usr=>{
          //this.router.navigate('[/User,:id]')
       });
     }
   }
    
  }

}
