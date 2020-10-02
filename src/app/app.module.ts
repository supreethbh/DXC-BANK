import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { StatementComponent } from './statement/statement.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { UtilityBillComponent } from './utility-bill/utility-bill.component';
import { AdminStatementComponent } from './admin-statement/admin-statement.component';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { KycComponent } from './kyc/kyc.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { SavingsComponent } from './savings/savings.component';
import { BenificiaryComponent } from './benificiary/benificiary.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    AdminLoginComponent,
    NewRegisterComponent,
    AccountBalanceComponent,
    StatementComponent,
    WithdrawComponent,
    TransferComponent,
    UtilityBillComponent,
    AdminStatementComponent,
    LogoutComponent,
   
    ServiceProviderComponent,
    KycComponent,
    AccountDetailsComponent,
    UpdateAccountComponent,
    SavingsComponent,
    BenificiaryComponent,
    MoneyTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
