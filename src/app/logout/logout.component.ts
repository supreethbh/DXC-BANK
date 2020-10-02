import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthenticateService,private router:Router) { }

  ngOnInit(): void {
    this.authService.logout();

      alert("logout successfull");
      
      this.router.navigate(['login_customer']);

      
  }

}
