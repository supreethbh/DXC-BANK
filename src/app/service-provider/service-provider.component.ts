import { Component, OnInit } from '@angular/core';
import { Provider } from '../services/provider';
import { ServiceProviderService } from '../services/service-provider.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  provider:Provider;
  constructor(private providerService:ServiceProviderService) { }

  ngOnInit(): void {
    this.getAllProvider();
  }

  addProviderDetails(provider:Provider){

    this.providerService.addServiceProviderDetails(provider);


 }
 providerList:Provider[]= [];

 getAllProvider(){


         this.providerService.getAllServiceProvider().subscribe(provider => this.providerList = provider );

           console.log(this.providerList);

           return this.providerList;

 }
 
 removeServiceProvider(provider){


  this.providerService.removeServiceProvider(provider);


}


}
