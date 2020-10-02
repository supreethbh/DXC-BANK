import { Component, OnInit } from '@angular/core';
import {AccountDetails} from '../services/accountDetails';
import {AccountDetailsService} from '../services/account-details.service'

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  accountDetails:AccountDetails;
  constructor(private accountDetailsService: AccountDetailsService) { }

  ngOnInit(): void {
  }

  updateAccount(accountDetails:AccountDetails){

    this.accountDetailsService.updateAccount(accountDetails);


 }

}
