import { Component, OnInit } from '@angular/core';
import {Terminalusers} from '../terminalusers';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-terminal-users',
  templateUrl: './terminal-users.component.html',
  styleUrls: ['./terminal-users.component.css']
})
export class TerminalUsersComponent implements OnInit {
  constructor(private loginservice:LoginService  ){} 
  terminalusers : Terminalusers = new Terminalusers() ; 
  terminalusersdetails?:any ; 
  roledetails?:any;
     
  ngOnInit(): void {
   this.getterminalusers();
  
  }

     
         getterminalusers(){
                
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

       
         deleteterminalusers(){

               this.loginservice.deleteterminaluser(this.terminalusers.user_code).subscribe(

                      res=> { console.log(res);},
                      err=> {console.log(err)}

               )
         }
         Anuulerterminal(terminalusers:Terminalusers){

          this.loginservice.annulerterminaluser(terminalusers).subscribe(

                res=> {
                  console.log(res);
                },
                err=> {
                      console.log(err);
                }
          )
      }
      blockterminaluser(terminalusers:Terminalusers){

               this.loginservice.blockedterminalusers(terminalusers).subscribe(
                  res=>{
                         console.log(res);
                  },
                  err=>{
                         console.log(err);
                  }
               )
      }
      
        

}

