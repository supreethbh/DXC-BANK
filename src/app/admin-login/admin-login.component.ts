import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  invalidLogin= false; 

  constructor(private authService:AuthenticateService,private router:Router) { }

  ngOnInit(): void {
  }
  checkLogin(data){
  if(this.authService.authenticateadmin(data.adminID,data.password)){

    this.router.navigate(['login_admin']);
    this.invalidLogin = false;
    alert("Admin ID or Password is incorrect !!");

}

else{
  this.invalidLogin = true;
  //alert("Login Successful !!")
  this.router.navigate(['adminAccount'])
  
}
}
}


