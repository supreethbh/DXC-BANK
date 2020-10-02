import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MoneyTransferService } from '../services/money-transfer.service';
import { AmountDeposit } from '../services/moneyTransfer';
import { Savings } from '../services/savings';
import { SavingsService } from '../services/savings.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent implements OnInit {

  // amountDeposit:AmountDeposit;
  // constructor(private moneyTransferService:MoneyTransferService) { }

//   ngOnInit(): void {
//     this.getAccountBalance(this.amountDeposit);
//   }

//  getAccountBalance(amountDeposit:AmountDeposit){
 // this.moneyTransferService.getAccountBalance(amountDeposit);

//   console.log(amountDeposit);

//   return amountDeposit;
//  }
//  amountList:AmountDeposit[]= [];

//   getAccountBalance2(amountDeposit):Obser<AmountDeposit>{


//         this.moneyTransferService.getAccountBalance(amountDeposit);
//         this.moneyTransferService.getAccountBalance().subscribe(amountDeposit => this.amountList = amountDeposit );

//           console.log(this.amountList);

//           return this.amountList;

// }
savings:Savings;
  constructor(private savingsService:SavingsService) { }

  ngOnInit(): void {
    this.getAllSavings();
  }

  addSavingsDetails(savings:Savings){

    this.savingsService.addSavingsDetails(savings);


 }
 savingsList:Savings[]= [];

 getAllSavings(){


         this.savingsService.getAllSavings().subscribe(savings => this.savingsList = savings );

           console.log(this.savingsList);

           return this.savingsList;

 }


}
