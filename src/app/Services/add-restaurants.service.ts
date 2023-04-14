import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRestaurantsService {

  url = 'http://localhost:1337/api/restaurants'

  constructor(private http:HttpClient) { }

  saveresto(data:any){
    return this.http.post(this.url,{data});
  }
}
