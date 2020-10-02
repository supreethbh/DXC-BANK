
import { Component, OnInit } from '@angular/core';
import { MoneyTransferService } from '../services/money-transfer.service';
import { MoneyTransfer } from '../services/moneyTransfer';
import { Statement } from '../services/statement';
import { StatementService } from '../services/statement.service';


@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  moneyTransfer:MoneyTransfer;
  constructor(private moneyTransferService:MoneyTransferService) { }

  ngOnInit(): void {
    this.getAllStatement();
  }

//   addStatementDetails(statement:Statement){

//     this.statementService.addStatementDetails(statement);


//  }

// addProviderDetails(moneyTransfer:MoneyTransfer){

//   this.moneyTransferService.addTransaction(moneyTransfer);


// }
 transactionList:MoneyTransfer[]= [];

 getAllStatement(){


         this.moneyTransferService.getAllTransaction().subscribe(moneyTransfer => this.transactionList = moneyTransfer );

           console.log(this.transactionList);

           return this.transactionList;

 }

}
