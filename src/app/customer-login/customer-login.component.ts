import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  invalidLogin = false;

  constructor(private authService:AuthenticateService,private router:Router) { }

  ngOnInit(): void {
  }
  checkLogin(data){

    if(this.authService.authenticatecustomer(data.uci,data.password)){

        this.router.navigate(['login_customer']);
        this.invalidLogin = false;
        alert("Customer ID or Password is incorrect !!");

    }

    else{
      this.invalidLogin = true;
     // alert("Login Successful !!")
      this.router.navigate(['balance'])
      
    }



}

}
