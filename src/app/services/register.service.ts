import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Register} from './register'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  
  url:string = "http://localhost:1000/register/" ;


  constructor(private http:HttpClient) { }

    
    customerRegistration(register:Register){



        this.http.post<Register>(this.url+"/", register)
        .subscribe(register => alert("New "+register.accountType+" Account Created Successfully !!!") );

        console.log(register);
    }
}

