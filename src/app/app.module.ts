import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

import { ANALYTICSComponent } from './analytics/analytics.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { TerminalUsersComponent } from './terminal-users/terminal-users.component';
import { UsersEnAttenteComponent } from './users-en-attente/users-en-attente.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { AddTerminalComponent } from './add-terminal/add-terminal.component';
import { BlockedTerminalUsersComponent } from './blocked-terminal-users/blocked-terminal-users.component';
import { AddTerminalUserComponent } from './add-terminal-user/add-terminal-user.component';
import { BlockedTerminalComponent } from './blocked-terminal/blocked-terminal.component';
import { TerminalEnAttenteComponent } from './terminal-en-attente/terminal-en-attente.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { BlockedMerchantComponent } from './blocked-merchant/blocked-merchant.component';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { MerchantsEnAttenteComponent } from './merchants-en-attente/merchants-en-attente.component';
import { FormsModule } from '@angular/forms';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AddUserComponent } from './add-user/add-user.component';

import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { RejectedTerminalsComponent } from './rejected-terminals/rejected-terminals.component';
import { ReectedterminalusersComponent } from './reectedterminalusers/reectedterminalusers.component';








@NgModule({
  declarations: [
 
    AppComponent,
    LoginComponent,
    MenuComponent,
  
    ANALYTICSComponent,
    GestionUsersComponent,
    BlockedUsersComponent,
    TerminalUsersComponent,
    UsersEnAttenteComponent,
    TerminalComponent,
    ParametrageComponent,
    AddTerminalComponent,
    BlockedTerminalUsersComponent,
    AddTerminalUserComponent,
    BlockedTerminalComponent,
    TerminalEnAttenteComponent,
    MerchantsComponent,
    BlockedMerchantComponent,
    AddMerchantComponent,
    MerchantsEnAttenteComponent,
    LoginuserComponent,
    AddUserComponent,
    TransactionsComponent,
    RejectedTerminalsComponent,
    ReectedterminalusersComponent,


    
    
 
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FontAwesomeModule,
   FormsModule ,
   RouterModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
