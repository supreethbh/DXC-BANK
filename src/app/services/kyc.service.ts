import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KYC } from './kyc';

@Injectable({
  providedIn: 'root'
})
export class KycService {

  
  url:string = "http://localhost:1000/kyc" ;


  constructor(private http:HttpClient) { }

    
    addKYC(kyc:KYC){

      if(kyc.aadhaarNumber<=0){
        alert("Please enter valid Account Number!!");
      }
      else if(kyc.cardPANNumber.length<=4){
        alert("Please enter valid Account Holder Name!!");
      }
      else if(kyc.contactNumber<999999999){
        alert("Contact Number should be 10 digits!!!!");
      }
      else if(kyc.contactNumber>9999999999){
        alert("Contact Number should be 10 digits!!");
      }
      else if(kyc.customerName.length<=0){
        alert("Please enter valid IFSC Code!!");
      }
      else{


        this.http.post<KYC>(this.url+"/addKYC", kyc)
        .subscribe(kyc => alert("KYC Details Added Successfully !!!") );

        console.log(kyc);
      }
    }
    updateKYC(kyc:KYC){



      this.http.post<KYC>(this.url+"/updateKYC", kyc)
      .subscribe(kyc => alert("KYC Details updated Successfully !!!") );

      console.log(kyc);
  }
}
