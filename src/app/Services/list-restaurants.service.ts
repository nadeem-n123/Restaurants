import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListRestaurantsService {

  url = 'http://localhost:1337/api/restaurants'

  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url);
  }

  deleteresto(id:any){
    return this.http.delete(this.url+'/'+id);
  }
}
