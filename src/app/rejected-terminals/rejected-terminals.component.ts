import { Component, OnInit } from '@angular/core';
import {Terminal} from '../terminal' ; 
import { LoginService } from '../login.service';

@Component({
  selector: 'app-rejected-terminals',
  templateUrl: './rejected-terminals.component.html',
  styleUrls: ['./rejected-terminals.component.css']
})
export class RejectedTerminalsComponent implements OnInit {
  terminaldetails?:any ; 
  terminal : Terminal = new Terminal();
  constructor(private loginservice: LoginService ) { }
  ngOnInit(): void {
    this.GetTerminaldetails();
  }
  GetTerminaldetails(){


    this.loginservice.getTerminalDetails().subscribe(

         res=> {
          this.terminaldetails=res ; 
          console.log(res)
         },
         err=>{

           console.log(err);
         }
    )
}





DeleteTerminal(terminal?:any) {

             this.loginservice.deleteterminal(terminal.terminal_number).subscribe(

                   res=> {

                       console.log(res)   ;
                       this.GetTerminaldetails();                    },

                       err=> 
                       {
                          console.log(err);
                       }
             )
}

}




