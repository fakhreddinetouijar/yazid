import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { AddTerminalUserComponent } from './add-terminal-user/add-terminal-user.component';
import { AddTerminalComponent } from './add-terminal/add-terminal.component';
import { ANALYTICSComponent } from './analytics/analytics.component';
import { BlockedMerchantComponent } from './blocked-merchant/blocked-merchant.component';
import { BlockedTerminalUsersComponent } from './blocked-terminal-users/blocked-terminal-users.component';
import { BlockedTerminalComponent } from './blocked-terminal/blocked-terminal.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MerchantsEnAttenteComponent } from './merchants-en-attente/merchants-en-attente.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { TerminalEnAttenteComponent } from './terminal-en-attente/terminal-en-attente.component';

import { TerminalUsersComponent } from './terminal-users/terminal-users.component';

import { TerminalComponent } from './terminal/terminal.component';
import { UsersEnAttenteComponent } from './users-en-attente/users-en-attente.component';

import { AddUserComponent } from './add-user/add-user.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RejectedTerminalsComponent } from './rejected-terminals/rejected-terminals.component';
import { ReectedterminalusersComponent } from './reectedterminalusers/reectedterminalusers.component';

const routes:

Routes =    [

          
            {
                  path:"",
                  component:LoginComponent

            },
            {
              path : "Menu", 
              component:MenuComponent,
              children:[

                 {
                 path:"analytics",
                     
                      component:ANALYTICSComponent,
                 },
              
          
                {
                 path:"carduser" , 
                 component:AddUserComponent,
                
              },
                 {
                      path: "GestionUsers",
                      component : GestionUsersComponent
                 },
                 {
                     path:"BlockedUsers",
                     component:BlockedUsersComponent
                 },
                 {
                      path:"TerminalUsers",

                      component:TerminalUsersComponent
                 },
                 {
                       path:"UsersEnAttente",
                       component: UsersEnAttenteComponent
                 },
                 {
                      path:"Terminal",
                      component: TerminalComponent
                      
                 },
                 {
                      path:"Parametrage",
                      component: ParametrageComponent
                 },
                 {
                     path : "AddTerminal",
                     component : AddTerminalComponent
                 },
                 {
                    path : "BlockedTerminalUsers",
                    component : BlockedTerminalUsersComponent
                 },
                 {
                    path: "AddTerminalUser",
                    component: AddTerminalUserComponent
                 },
                 {
                        path :"BlockedTerminal",
                        component:BlockedTerminalComponent
                        
                 },
                 {
                     path : "TerminalEnAttente",
                     component : TerminalEnAttenteComponent
                 },
                
                 {
                     path : "Merchant",
                     component:MerchantsComponent

                 },
                 {
                     path : "BlockedMerchants",
                     component:BlockedMerchantComponent
                 },
                 {
                     path : "AddMerchant",
                     component : AddMerchantComponent
                 },{
                      path:"MerchantEnAttente",
                      component : MerchantsEnAttenteComponent
                 },{
                       path : "Transactions", 
                       component: TransactionsComponent 
                 },
                 {
                       path : "rejectedTerminals",
                       component : RejectedTerminalsComponent
                       
                  },
                  {
                      path: "rejectedTerminalusers",
                      component : ReectedterminalusersComponent
                  }
            
                   ]
         },

             
               
          
               
             
               

               
           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
