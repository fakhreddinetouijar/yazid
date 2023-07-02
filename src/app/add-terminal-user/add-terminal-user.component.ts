import { Component, OnInit } from '@angular/core';
import {Terminalusers} from '../terminalusers';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-terminal-user',
  templateUrl: './add-terminal-user.component.html',
  styleUrls: ['./add-terminal-user.component.css']
})
export class AddTerminalUserComponent implements OnInit {
  constructor(private loginservive:LoginService  ){} 
  terminalusers : Terminalusers = new Terminalusers() ; 
     
  ngOnInit(): void {
  
  }

       addterminalusers(){

               return this.loginservive.addterminaluser(this.terminalusers).subscribe(

                    res=>{

                          console.log(res);
                    },
                    err=> {
                        console.log(err);
                    }
               )
       }
      
        

}
