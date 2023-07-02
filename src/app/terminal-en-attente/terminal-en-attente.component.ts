import { Component, OnInit } from '@angular/core';
import {Terminal} from '../terminal' ; 
import { LoginService } from '../login.service';

@Component({
  selector: 'app-terminal-en-attente',
  templateUrl: './terminal-en-attente.component.html',
  styleUrls: ['./terminal-en-attente.component.css']
})
export class TerminalEnAttenteComponent implements OnInit {
  terminaldetails?:any ;
  terminal:Terminal=new Terminal(); 
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

          validerterminal(terminal:Terminal){

                 this.loginservice.validerterminal(terminal).subscribe(

                     res => {
                         console.log(res) ; 
                     },
                     err=> 
                    {
                          console.log(err);
                    }
                 )
          }

            Anuulerterminal(terminal:Terminal){

                this.loginservice.annulerterminal(terminal).subscribe(

                      res=> {
                        console.log(res);
                      },
                      err=> {
                            console.log(err);
                      }
                )
            }

}
