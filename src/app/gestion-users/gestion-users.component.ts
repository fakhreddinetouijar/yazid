import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {
  
  

  userdetails ?:any;
  userstoupdate = {

    rollnumber :"",
    name:"",
    password:"",
    email:"",
   
  };
  user: User = new User();
    constructor(private userservice :LoginService ,  ){
 
       
                      
    }
  ngOnInit(): void {
  
    this.getUserDetails();
  }

      getUserDetails(){

           this.userservice.getUsers().subscribe(
               (res)=> {
   console.log(res);
   console
     this.userdetails = res;
   
    
    
        
               },
               (err)=> {
                  console.log(err)
               }
           )
      }
      registerUser(registerForm:any){ 

        this.userservice.registerUser(registerForm.value).subscribe(
  
              (resp)=>{
                console.log(resp);
                registerForm.reset();
                this.getUserDetails();
              },
              (err)=> {console.log(err);}
        )
         
    }

        deleteuser(user:any){
           this.userservice.deleteuser(user.rollnumber).subscribe(
               (resp)=>  {
                   console.log(resp);
                   this.getUserDetails();
               },
               (err)=> console.log(err)
           );
        }

           update(user:any){

            this.userstoupdate=user ;
       
}
updateuser(){

    this.userservice.updateuser(this.userstoupdate).subscribe(
      (resp)=>{
        console.log(resp)
      },
      (err)=> {
        console.log(err);
      }
    )
}
getUser(){   this.userservice.Login(this.user).subscribe(
  data => {
      const m:number =this.user.rollnumber ;

      this.GetcurrentUser(m);
    
      
      
    
    
  },
  error => {
   console.log(error)
  }
);
}
GetcurrentUser(m:number){
  this.userservice.getcurrentuser(this.user.rollnumber).subscribe(
   

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