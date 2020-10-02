import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmountDeposit, MoneyTransfer } from './moneyTransfer';

@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {

  url:string = "http://localhost:1000/moneyTransfer" ;
  
  //details:AmountDeposit[]=[];


  constructor(private http:HttpClient) { }


  // depositAmount(moneyTransfer:AmountDeposit){

  //   this.http.put<MoneyTransfer>(this.url+"/moneyDeposit", moneyTransfer)
  //       .subscribe(moneyTransfer => alert("Amount Deposited Successfully !!!") );

  //       console.log(moneyTransfer);
  // }
  // transferAmount(moneyTransfer:AmountDeposit){

  //   this.http.put<MoneyTransfer>(this.url+"/moneyWithDraw", moneyTransfer)
  //       .subscribe(moneyTransfer => alert("Amount Transfered Successfully !!!") );

  //       console.log(moneyTransfer);
  // }
  
  // getAccountBalance(moneyTransfer:AmountDeposit){

  //   return   this.http.get<AmountDeposit>(this.url+"/getAccountBalance/"+moneyTransfer.accountNumber).subscribe(data => {
  //     var money:AmountDeposit;
  //     money=data;
  //     alert(data.accountBalance+" "+data.accountHolderName+" "+data.accountNumber); 
  //     console.log(money);
  //     console.log("accnt"+money);
  //     // return {"accountHolderName": data.accountHolderName,
  //     //         "accountBalance": data.accountBalance,
  //     //         "accountNumber": data.accountNumber};
  //     return money;
  //   });

  //  }

  moneyTransfer:MoneyTransfer;
  addTransaction(moneyTransfer:MoneyTransfer){
    this.http.post<MoneyTransfer>(this.url+"/addTransaction", moneyTransfer)
    .subscribe(moneyTransfer => alert("Transaction Successful !!!") );

    console.log(moneyTransfer);
  }
  getAllTransaction():Observable<any>{

    return   this.http.get(this.url+"/getTransaction");

   }

}
