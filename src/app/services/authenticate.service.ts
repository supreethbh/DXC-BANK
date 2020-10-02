import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  authenticatecustomer(uci:string,password:string){

    if(uci === "sudarsanan" &&  password === "sud123"){

          sessionStorage.setItem('uci',uci);


          return false;
    }

      else{

        return true;
      }

}
authenticateadmin(adminID:string,password:string){

  if(adminID === "dxc" &&  password === "dxc123"){

        sessionStorage.setItem('adminID', adminID);


        return false;
  }

    else{

      return true;
    }

}

  isCustomerLoggedIn(){

    let user  = sessionStorage.getItem('uci');
    return  !(user == null) 

  }


  isAdminLoggedIn(){
    let user  = sessionStorage.getItem('adminID');
    return  !(user == null)
  }

  
  logout(){
    sessionStorage.removeItem('uci');
    sessionStorage.removeItem('adminID');
  }
}
