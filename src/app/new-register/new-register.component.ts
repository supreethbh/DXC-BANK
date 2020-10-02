import { Component, OnInit } from '@angular/core';
import { Register } from '../services/register';
import {RegisterService} from '../services/register.service'

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {

  register:Register;

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  customerRegistration(register:Register){

    this.registerService.customerRegistration(register);


 }
}
