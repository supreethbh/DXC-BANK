import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoneyTransferService } from '../services/money-transfer.service';
import { AmountDeposit, MoneyTransfer } from '../services/moneyTransfer';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})
export class MoneyTransferComponent implements OnInit {

  moneyTransfer:MoneyTransfer;
  // accountNumber:number;
  // accountHolderName:string;
  // data:any;
  // accountBalanceAfterDeposit: number;
  // accountBalanceAfterWithDraw: number;
  // dataList:AmountDeposit;
  Debit:string="Debit";
  Credit:string="Credit"
  

 
  constructor(private moneyTransferService: MoneyTransferService) { }

 
  
  
  

  ngOnInit(): void {
    
    //this.getAccountBalance;
    // this.getAllStatement();
    // alert(this.transactionList);
    
    
  }

  // depositAmount(moneyTransfer:AmountDeposit){

    
  //   this.moneyTransferService.depositAmount(moneyTransfer);
  
  
  // }

  

  // withDrawAmount(moneyTransfer:AmountDeposit){

  //   this.moneyTransferService.transferAmount(moneyTransfer);
    
  
  
  // }

  addTransaction(moneyTransfer:MoneyTransfer)
  {
    this.moneyTransferService.addTransaction(moneyTransfer);
  }



  // withdraw(moneyTransfer:MoneyTransfer)
  // {
  //   for (let index = 0; index < this.transactionList.length; index++) {
  //     const element = this.transactionList[index];
  //     alert(element);
  //     if(element.accountNumber==10065577789){
  //       alert("Success")
  //       alert(element.accountBalance);
  //       this.moneyTransfer.accountBalance=element.accountBalance;
  //       this.moneyTransfer.accountBalance=this.moneyTransfer.accountBalance - 500;
  //       this.moneyTransferService.depositAmount(moneyTransfer);
  //     }
  //     else{
  //       alert("failed!!");
  //     }
  //   }
  // }
  // deposit(moneyTransfer:MoneyTransfer)
  // {
  //   for (let index = 0; index < this.transactionList.length; index++) {
  //     const element = this.transactionList[index];
  //     alert(element);
  //     if(element.accountNumber==10065577789){
  //       alert("Success")
  //       alert(element.accountBalance);
  //       this.moneyTransfer.accountBalance=element.accountBalance;
  //       this.moneyTransfer.accountBalance=this.moneyTransfer.accountBalance + 500;
  //       this.moneyTransferService.depositAmount(moneyTransfer);
  //     }
  //     else{
  //       alert("failed!!");
  //     }
  //   }
  // }
  // transactionList:MoneyTransfer[]= [];


//  getAllStatement(){


//          this.moneyTransferService.getAllTransaction().subscribe(moneyTransfer => this.transactionList = moneyTransfer );

//            console.log(this.transactionList);

//            return this.transactionList;

//  }


  

 
  // getAccountBalance(moneyTransfer:MoneyTransfer){

    
  //   console.log("START");
  //   console.log(this.moneyTransferService.getAccountBalance(moneyTransfer));
  //   this.data=this.moneyTransferService.getAccountBalance(moneyTransfer);
  //   console.log(this.data);

  //   if(moneyTransfer.transactionType==="debit")
  //   {

  //     console.log(this.data);

  //     this.accountBalance=this.data.accountBalance;
  //     this.accountHolderName=this.data.accountHolderName;
  //     this.accountNumber=this.data.accountHolderName;
  //     this.accountBalanceAfterWithDraw=Number(this.accountBalance) - Number(moneyTransfer.amount);
  //     this.dataList={"accountHolderName": this.accountHolderName,
  //                    "accountBalance": this.accountBalanceAfterWithDraw,
  //                    "accountNumber": this.accountNumber};
  //     console.log("Debit"+this.dataList);
  //     this.withDrawAmount(this.dataList);
  //   }
  //   else if(moneyTransfer.transactionType==="credit"){

  //     console.log(this.data);

  //     this.accountBalance=this.data.accountBalance;
  //     this.accountHolderName=this.data.accountHolderName;
  //     this.accountNumber=this.data.accountHolderName;
  //     this.accountBalanceAfterWithDraw=Number(this.accountBalance) + Number(moneyTransfer.amount);
  //     this.dataList={"accountHolderName": this.accountHolderName,
  //                    "accountBalance": this.accountBalanceAfterWithDraw,
  //                    "accountNumber": this.accountNumber};
  //     console.log("credit"+this.dataList);
  //     this.depositAmount(this.dataList);

  //   }
  //   else{
  //     alert("fail");
  //   }



  
  
  // }

 
}

