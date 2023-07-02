import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User = new User();


  constructor(private loginservice: LoginService , private router:Router) { }

  ngOnInit(): void {

  }

  userLogin() {
   interface  res{

      token?:string ; 

      messageLogin?:string ; 

    }

 
    this.loginservice.Login(this.user).subscribe(
    ( data:res ) => {

      if(data.messageLogin==='Login Successfully'){
        localStorage.setItem('token', data.token!.toString());

          const m:number =this.user.rollnumber ;
    
             
                    this.router.navigate(['/Menu/analytics'])}
                    else {
                      alert("inccorect email or password please check again")
                    }
       console.log(data);
       
   
        
        
      },
      error => {
       console.log(error)
      }
    );

  }
  getUserDetails(){

    this.loginservice.getUsers().subscribe(
        (res)=> {


        
console.log(res);





 
        },
        (err)=> {
           console.log(err)
        }
    )
}
GetcurrentUser(m:number){
  this.loginservice.getcurrentuser(this.user.rollnumber).subscribe(
   

        (res:any)=>{
          console.log(res);
          this.user = res;
        }, 
        (err)=> {
          console.log(err);
        }
  )
}


}
      


       
     
         
    
         
    
     
     
  
    
   


 


  


