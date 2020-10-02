import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AccountDetails} from './accountDetails';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

    
  url:string = "http://localhost:1000/bank" ;


  constructor(private http:HttpClient) { }

    
    addAccount(accountDetails:AccountDetails){


      console.log(accountDetails.accountHolderName.length)
      if(accountDetails.accountNumber<=0){
        alert("Please enter valid Account Number!!");
      }
      else if(accountDetails.accountHolderName.length<=0){
        alert("Please enter valid Account Holder Name!!");
      }
      else if(accountDetails.bankIFSC.length<=0){
        alert("Please enter valid IFSC Code!!");
      }
      else{

        this.http.post<AccountDetails>(this.url+"/addAccount", accountDetails)
        .subscribe(accountDetails => alert(" Account is added Successfully !!!") );

        console.log(accountDetails);
      
      }
    }
    updateAccount(accountDetails:AccountDetails){
      if(accountDetails.accountNumber<=0){
        alert("Please enter valid Account Number!!");
      }
      else if(accountDetails.accountHolderName.length<=0){
        alert("Please enter valid Account Holder Name!!");
      }
      else if(accountDetails.bankIFSC.length<=0){
        alert("Please enter valid IFSC Code!!");
      }


      else{
      this.http.put<AccountDetails>(this.url+"/updateAccount", accountDetails)
      .subscribe(accountDetails => alert(" Account is updated Successfully !!!") );
      }

      console.log(accountDetails);
  }

  getAllBenificiary():Observable<any>{

    return   this.http.get(this.url+"/getBenificiaryDetails");

   }
}
