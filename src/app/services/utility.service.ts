import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utility } from './utility';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  url:string = "http://localhost:1000/utility" ;


  constructor(private http:HttpClient) { }

    
    addUtilityDetails(utility:Utility){



        this.http.post<Utility>(this.url+"/addUtilBill", utility)
        .subscribe(utility => alert(utility.remittanceName+" Bill Added Successfully !!!") );

        console.log(utility);
    }

    removeUtility(utility:Utility){


      this.http.delete(this.url+"/deleteUtilBill/"+utility.remittanceId).subscribe(data => alert("Utility Bill Removed!!"));



  }

    getAllUtility():Observable<any>{

      return   this.http.get(this.url+"/getUtilBill");

     }
}
