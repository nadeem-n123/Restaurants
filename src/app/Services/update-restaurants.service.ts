import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateRestaurantsService {

  url = 'http://localhost:1337/api/restaurants'

  constructor(private http:HttpClient) { }

  getCurrentResto(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id: any,data: any){
    return this.http.put(`${this.url}/${id}`,{data});
  }
}
