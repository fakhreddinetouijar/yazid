import { Component, OnInit } from '@angular/core';
import {Terminalusers} from '../terminalusers'
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reectedterminalusers',
  templateUrl: './reectedterminalusers.component.html',
  styleUrls: ['./reectedterminalusers.component.css']
})
export class ReectedterminalusersComponent implements OnInit {
  ngOnInit(): void {
    this.getTerminalusers();
    
  }
  constructor(private loginservice:LoginService){}
    terminalusersdetails?:any ; 

  getTerminalusers(){
                
    return this.loginservice.getterminalusers().subscribe(

     
             res=> {
               this.terminalusersdetails = res ; 
                  console.log(res);
           
             },
             err=> {

                  console.log(err);
             } )
                

}
}
