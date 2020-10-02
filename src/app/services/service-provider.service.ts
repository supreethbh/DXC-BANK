import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider} from './provider';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  url:string = "http://localhost:1000/service" ;


  constructor(private http:HttpClient) { }

    
    addServiceProviderDetails(serviceProvider:Provider){



        this.http.post<Provider>(this.url+"/addServiceProvider", serviceProvider)
        .subscribe(serviceProvider => alert("Service Provider Details Added Successfully !!!") );

        console.log(serviceProvider);
    }

    removeServiceProvider(provider:Provider){


      this.http.delete(this.url+"/deleteServiceProvider/"+provider.serviceProviderID).subscribe(data => alert("Service Provider Removed!!"));



  }

    getAllServiceProvider():Observable<any>{

      return   this.http.get(this.url+"/getAllService");

     }
}
