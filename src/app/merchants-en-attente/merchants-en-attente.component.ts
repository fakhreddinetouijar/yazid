import { Component, OnInit } from '@angular/core';
import { Merchant } from '../merchant';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-merchants-en-attente',
  templateUrl: './merchants-en-attente.component.html',
  styleUrls: ['./merchants-en-attente.component.css']
})
export class MerchantsEnAttenteComponent implements OnInit {
  ngOnInit(): void {
      this.getmerchant();
  }
  Merchantdetails?:any ; 
  merchant : Merchant = new Merchant();
  constructor(private loginservice:LoginService){}

    getmerchant(){

         this.loginservice.readmerchant().subscribe(

          res=>{
            this.Merchantdetails = res ; 
               console.log(res)
          },
          err=>{
            console.log(err);
             
          }
         )
    }
    deleteMerchant(merchant:Merchant){

          this.loginservice.deletemerchant(merchant.acronym).subscribe(

              res=>{
                console.log(res);
              },
              err=> {
                console.log(err);
              }
          )
    }
      modifyMerchant(merchant:Merchant){

          this.loginservice.modifymerchant(merchant).subscribe(

              res=>{
                     console.log(res);
              },
              err=>{
                   console.log(err);
              }
          )
      }
      blockMerchant(merchant:Merchant){

         this.loginservice.blockmerchant(merchant).subscribe(
          res=>{
               console.log(res)
          },
          err=>{
               console.log(err);
          }
         )
      }

      validermerchant(merchant:Merchant){

          this.loginservice.approvemerchant(merchant).subscribe(

             res=>{
                console.log(res);
             },
             err=>{
                console.log(err);
             }
             
          )
      }

}

