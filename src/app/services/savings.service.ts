import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Savings} from './savings';


@Injectable({
  providedIn: 'root'
})
export class SavingsService {

  url:string = "http://localhost:1000/savings" ;


  constructor(private http:HttpClient) { }

    
    addSavingsDetails(savings:Savings){



        this.http.post<Savings>(this.url+"/addSavingsDetails", savings)
        .subscribe(savings => alert("Account Created Successfully !!!") );

        console.log(savings);
    }

    getAllSavings():Observable<any>{

      return   this.http.get(this.url+"/getAllSavings");

     }
    
}

