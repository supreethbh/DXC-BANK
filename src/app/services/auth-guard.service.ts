import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router ,private authService:AuthenticateService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (this.authService.isCustomerLoggedIn())
    {
      return true;
      
      
    }
    else if(this.authService.isAdminLoggedIn())
    {
      return true;
    }

    else{
     
     this.router.navigate(['login_customer']);
     return false;
    }

  }
}
