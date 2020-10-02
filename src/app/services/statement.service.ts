import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statement } from './statement';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  url:string = "http://localhost:1000/transaction" ;


  constructor(private http:HttpClient) { }

    
  addStatementDetails(statement:Statement){



    this.http.post<Statement>(this.url+"/transactions", statement)
    .subscribe(serviceStatement => alert("Service Statement Details Added Successfully !!!") );

    console.log(statement);
}

  getAllStatement():Observable<any>{

    return   this.http.get(this.url+"/getAllStatement");

   }
   
}
