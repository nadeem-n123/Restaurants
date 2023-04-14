import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestoDataService {

  url = 'http://localhost:1337/api/restaurants'
  
  constructor(private http:HttpClient) { }
  ngOnInit(){}

  getuser(id:any){
   return this.http.get(this.url+'/'+id);
  }
}
