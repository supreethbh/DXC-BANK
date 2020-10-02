import { Component, OnInit } from '@angular/core';
import { AccountDetailsService } from '../services/account-details.service';
import { AccountDetails } from '../services/accountDetails';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  accountDetails:AccountDetails;
  constructor(private accountDetailsService: AccountDetailsService) { }

  ngOnInit(): void {
  }

  addAccount(accountDetails:AccountDetails){

    this.accountDetailsService.addAccount(accountDetails);


 }
}
