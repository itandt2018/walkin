import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient, private httpdata: Http) { }
  
  
  getUsers() {
    return this.http.get('https://reqres.in/api/users?page=2')
  }
  

  
  }
