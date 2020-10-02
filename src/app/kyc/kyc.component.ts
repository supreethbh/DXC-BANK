import { Component, OnInit } from '@angular/core';
import { KYC } from '../services/kyc';
import {KycService} from '../services/kyc.service';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit {

  kyc:KYC;

  constructor(private kycService:KycService) { }

  ngOnInit(): void {
  }

  addKYC(kyc:KYC){

    this.kycService.addKYC(kyc);


 }
}
