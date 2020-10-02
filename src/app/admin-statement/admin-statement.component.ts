import { Component, OnInit } from '@angular/core';
import { Statement } from '../services/statement';
import { StatementService } from '../services/statement.service';

@Component({
  selector: 'app-admin-statement',
  templateUrl: './admin-statement.component.html',
  styleUrls: ['./admin-statement.component.css']
})
export class AdminStatementComponent implements OnInit {

  
  statement:Statement;
  constructor(private statementService:StatementService) { }

  ngOnInit(): void {
    this.getAllStatement();
  }

//   addStatementDetails(statement:Statement){

//     this.statementService.addStatementDetails(statement);


//  }
 transactionList:Statement[]= [];

 getAllStatement(){


         this.statementService.getAllStatement().subscribe(statement => this.transactionList = statement );

           console.log(this.transactionList);

           return this.transactionList;

 }

}
