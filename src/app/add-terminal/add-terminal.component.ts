import { Component, OnInit } from '@angular/core';
import { Terminal } from '../terminal';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-terminal',
  templateUrl: './add-terminal.component.html',
  styleUrls: ['./add-terminal.component.css']
})
export class AddTerminalComponent implements OnInit {


  terminal : Terminal = new Terminal() ; 
  constructor(private loginservice: LoginService ) { }

     
  ngOnInit(): void {
    

    
  }
      
  AddTerminal() {
    this.loginservice.addterminal(this.terminal).subscribe(
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
