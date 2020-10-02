import { Component, OnInit } from '@angular/core';
import {AccountDetails} from '../services/accountDetails'
import { AccountDetailsService } from "../services/account-details.service";

@Component({
  selector: 'app-benificiary',
  templateUrl: './benificiary.component.html',
  styleUrls: ['./benificiary.component.css']
})
export class BenificiaryComponent implements OnInit {

  
  accountDetails:AccountDetails;
  constructor(private accountDetailsService: AccountDetailsService) { }

  ngOnInit(): void {
    this.getAllBenificiary();
  }

  addAccount(accountDetails:AccountDetails){

    this.accountDetailsService.addAccount(accountDetails);


 }
 updateAccount(accountDetails:AccountDetails){

  this.accountDetailsService.updateAccount(accountDetails);


}
benificiaryList:AccountDetails[]= [];

getAllBenificiary(){


        this.accountDetailsService.getAllBenificiary().subscribe(accountDetails => this.benificiaryList = accountDetails );

          console.log(this.benificiaryList);

          return this.benificiaryList;

}

}
