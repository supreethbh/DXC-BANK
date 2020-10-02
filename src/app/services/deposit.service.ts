import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Deposit } from './deposit';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  
  url:string = "http://localhost:1000/fixedDeposit" ;


  constructor(private http:HttpClient) { }

    
    addDepositDetails(deposit:Deposit){



        this.http.post<Deposit>(this.url+"/deposit", deposit)
        .subscribe(deposit => alert("Deposit  Added Successfully !!!") );

        console.log(deposit);
    }

    getAllDeposit():Observable<any>{

      return   this.http.get(this.url+"/balance");

     }
}
