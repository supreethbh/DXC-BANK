import { Component, OnInit } from '@angular/core';
import { Savings } from '../services/savings';
import { SavingsService } from '../services/savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

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
