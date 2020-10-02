import { Component, OnInit } from '@angular/core';
import { Utility } from '../services/utility';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-utility-bill',
  templateUrl: './utility-bill.component.html',
  styleUrls: ['./utility-bill.component.css']
})
export class UtilityBillComponent implements OnInit {

  utility:Utility;
  constructor(private utilityService:UtilityService) { }

  ngOnInit(): void {
    this.getAllUtility();
  }

  addUtilityDetails(utility:Utility){

    this.utilityService.addUtilityDetails(utility);


 }
 utilityList:Utility[]= [];

 getAllUtility(){


         this.utilityService.getAllUtility().subscribe(utility => this.utilityList = utility );

           console.log(this.utilityList);

           return this.utilityList;

 }
 
 removeUtility(utility){


  this.utilityService.removeUtility(utility);


}
}
