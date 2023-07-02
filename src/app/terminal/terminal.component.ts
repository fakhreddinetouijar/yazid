import { Component, OnInit } from '@angular/core';
import {Terminal} from '../terminal' ; 
import { LoginService } from '../login.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  terminaldetails?:any ; 
  terminalstoupdate={
       
    terminal_number:"",
    currency_code:"",
    bank_code:"",
    master_pos_indicator:"",
    master_pos_number:""
  }
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
  blockterminal(terminal:Terminal){

      this.loginservice.blockTerminal(terminal).subscribe(

            res=>{
                console.log(res)
            },
            err=>{
              console.log(err);
            }
      )
  }
  update(terminal:any){
    this.terminalstoupdate = terminal ;
       
  }
  updateterminal(){ 
    this.loginservice.ModifyTerminal(this.terminalstoupdate).subscribe(
      
           res=>{
               console.log(res);
           } , 
           err=>{
               console.log(err);
           }
          )   }}

       
 


