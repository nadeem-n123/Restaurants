import { Component } from '@angular/core';
import { RegisterUserService } from '../Services/register-user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {

  submitted:boolean=false;
  alert:boolean=false;
  passwordTextType: boolean = false;
  
  constructor(
    private regapi:RegisterUserService,
    private _router:Router
    ){}
  ngOnInit(){
  }

  
  register = new  FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z]*')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8),Validators.pattern('^[0-9]{5,7}(?:-[0-9]{4})?$')])
  })


  Registeruser(data:any){
    this.submitted = true;

    if(this.register.invalid){
      return
    }else{
    console.warn(this.register.value);
    this.regapi.reguser(data).subscribe(()=>{
      this.alert = true;
      this.register.reset();
    })
  }
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType
  }
  
  closealert(){
    this.alert = false;
  }

  back(){
    this._router.navigate(['/login']);
  }
}
