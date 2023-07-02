import { Component, OnInit } from '@angular/core';
import {Merchant} from '../merchant'
import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css']
})
export class AddMerchantComponent implements OnInit{
  merchant:Merchant=new Merchant(); 
  constructor(private loginservice: LoginService ) { }

  ngOnInit(): void {
  
  }
   AddMerchant(){

    this.loginservice.addmerchant(this.merchant).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
        alert("hi");
      }
    );
   }



     

   
     

}
