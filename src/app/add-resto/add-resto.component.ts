import { Component } from '@angular/core';
import { AddRestaurantsService } from '../Services/add-restaurants.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent {

  alert:boolean=false;
  submitted:boolean=false;

  constructor(private api:AddRestaurantsService){}

  resto = new  FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('[a-zA-Z ]*')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    address:new FormControl('',[Validators.required,Validators.maxLength(45)]),
    location:new FormControl('',[Validators.required,Validators.maxLength(25),Validators.pattern('[a-zA-Z ]*')]),
    zipcode:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.pattern('^[0-9]{5,7}(?:-[0-9]{4})?$')])
  })

  addresto(data:any){
    this.submitted=true;

    if(this.resto.invalid){
      return
    }else{
      this.api.saveresto(data).subscribe(()=>{
        this.submitted=false;
        this.alert=true;
        this.resto.reset();
      })
  }
}

  closealert(){
    this.alert=false;
  }
}
