import { TranslationWidth } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminStatementComponent } from './admin-statement/admin-statement.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';

import { KycComponent } from './kyc/kyc.component';
import { LogoutComponent } from './logout/logout.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { SavingsComponent } from './savings/savings.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { AuthGuardService } from './services/auth-guard.service';
import { StatementComponent } from './statement/statement.component';
import { TransferComponent } from './transfer/transfer.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { UtilityBillComponent } from './utility-bill/utility-bill.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BenificiaryComponent } from "./benificiary/benificiary.component";
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';

const routes: Routes = [
  {path:"login_customer", component: CustomerLoginComponent},
  {path:"login_admin", component: AdminLoginComponent},
  {path:"register", component: NewRegisterComponent},
  {path:"balance", component: AccountBalanceComponent, canActivate:[AuthGuardService]},
  {path:"statement", component: StatementComponent, canActivate:[AuthGuardService]},
  {path:"admin_statement", component:AdminStatementComponent, canActivate:[AuthGuardService]},
  {path:"transfer", component: TransferComponent, canActivate:[AuthGuardService] },
  {path:"utility", component: UtilityBillComponent, canActivate:[AuthGuardService]},
  {path:"withdraw", component: WithdrawComponent, canActivate:[AuthGuardService]},
  {path:"service", component: ServiceProviderComponent, canActivate:[AuthGuardService]},
  {path:"logout", component: LogoutComponent, canActivate:[AuthGuardService]},
  {path:"addAccount", component: AccountDetailsComponent, canActivate:[AuthGuardService]},
  {path:"kyc", component: KycComponent, canActivate:[AuthGuardService]},
  {path:"updateAccount", component: UpdateAccountComponent, canActivate:[AuthGuardService]},
  {path:"adminAccount", component: SavingsComponent, canActivate:[AuthGuardService]},
  {path:"benificiary", component: BenificiaryComponent, canActivate:[AuthGuardService]},
  {path:"moneyTransfer", component: MoneyTransferComponent,canActivate:[AuthGuardService]}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
