import { Component } from '@angular/core';
import { ListRestaurantsService } from '../Services/list-restaurants.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent {

  collection:any=[];
  Setdata:any;
  editresto:any;
  limit: any = 8;
  page: number = 1;
  constructor(private Rapi:ListRestaurantsService){}
  ngOnInit(){
      this.getuser();
  }

  getuser(){
    this.Rapi.users().subscribe((data:any)=>{
      console.log("Shown Data",data);
      this.collection=data?.data
    })
  }

  DltResto(id:any){
    if(confirm("Are you sure to delete !")){
      this.Rapi.deleteresto(id).subscribe(()=>{
      this.getuser();
})
}
}

pageChange(page: any) {
  this.page = page ? page : 1;
  this.getuser();
}
}
