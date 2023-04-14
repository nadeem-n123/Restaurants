import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  regurl = 'http://localhost:1337/api/registrations'

  constructor(private http:HttpClient) { }

  reguser(data:any){
    return this.http.post(this.regurl,{data});
 }
}
