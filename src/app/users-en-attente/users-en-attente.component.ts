import { Component, OnInit } from '@angular/core';
import {Terminalusers} from '../terminalusers';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-users-en-attente',
  templateUrl: './users-en-attente.component.html',
  styleUrls: ['./users-en-attente.component.css']
})
export class UsersEnAttenteComponent implements OnInit {
  ngOnInit(): void {
      this.getTerminalusers();
  }
  constructor (private loginservice:LoginService){}
  terminaluser : Terminalusers = new Terminalusers() ; 
  terminalusersdetails?:any ; 

  getTerminalusers(){
                
    return this.loginservice.getterminalusers().subscribe(

     
             res=> {
               this.terminalusersdetails = res ; 
                  console.log(res);
           
             },
             err=> {

                  console.log(err);
             }
                      

              
        
    )
}
validerterminal(terminaluser:Terminalusers){

  this.loginservice.validerterminaluser(terminaluser).subscribe(

      res => {
          console.log(res) ; 
      },
      err=> 
     {
           console.log(err);
     }
  )
}
Annulerterminaluser(terminaluser:Terminalusers){

     this.loginservice.annulerterminaluser(terminaluser).subscribe(
      res=>{
          console.log(res);
      },
      err=>{
         console.log(err);
      }
     )
}

}
