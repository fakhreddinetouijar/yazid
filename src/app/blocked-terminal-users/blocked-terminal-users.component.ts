import { Component, OnInit } from '@angular/core';
import {Terminalusers} from '../terminalusers'
import { LoginService } from '../login.service';

@Component({
  selector: 'app-blocked-terminal-users',
  templateUrl: './blocked-terminal-users.component.html',
  styleUrls: ['./blocked-terminal-users.component.css']
})
export class BlockedTerminalUsersComponent implements OnInit {
  ngOnInit(): void {

     this.getterminalusers() ; 
   
  }
  constructor(private loginservice:LoginService ){}

     getterminalusers(){

       this.loginservice.getterminalusers().subscribe(

             res=>{
                   
                     console.log(res); 

             },
             err=> {
                         console.log(err);
             }
       )

        
     }

}
