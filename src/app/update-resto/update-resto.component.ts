import { Component } from '@angular/core';
import { UpdateRestaurantsService } from '../Services/update-restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.scss']
})
export class UpdateRestoComponent {

  editresto = new  FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('[a-zA-Z]*')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    address:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    location:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern('[a-zA-Z]*')]),
    zipcode:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.pattern('^[0-9]{5,7}(?:-[0-9]{4})?$')])
  })
  
  submitted:boolean=false;
  restoList: any;

  constructor(
    private Api:UpdateRestaurantsService, 
    private router:ActivatedRoute,
    private _router:Router,
    ){}

  ngOnInit(){
    this.setEditValue();
  }

  setEditValue(){
    this.Api.getCurrentResto(this.router.snapshot.params['id']).subscribe((res:any)=>{
      this.restoList = res?.data?.attributes;

      this.editresto.controls.name.setValue(this?.restoList?.name);
      this.editresto.controls.email.setValue(this?.restoList?.email);
      this.editresto.controls.address.setValue(this?.restoList?.address);
      this.editresto.controls.location.setValue(this?.restoList?.location);
      this.editresto.controls.zipcode.setValue(this?.restoList?.zipcode)
    })
  }

  updateRestoData(data:any){
    this.submitted = true;

    if(this.editresto.invalid){
      return
    }else{
    this.Api.updateResto(this.router.snapshot.params['id'],data).subscribe((res:any)=>{
      this.editresto.reset();
      this._router.navigate(['/list']);
    })
  }
  }

}
