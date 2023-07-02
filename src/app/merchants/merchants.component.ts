import { Component, OnInit } from '@angular/core';
import { Merchant } from '../merchant';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent implements OnInit {
  ngOnInit(): void {
    this.getmerchant() ; 
   
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
    deleteMerchant(merchant:any){

          this.loginservice.deletemerchant(merchant.merchant_number).subscribe(

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

}
