import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {
  


   constructor(private loginservive:LoginService  ){}
 
  
  
  registerUser(registerForm:any){  
  
  

      this.loginservive.registerUser(registerForm.value).subscribe(


            (resp)=>{
              console.log(resp);
              registerForm.reset();
              this.getUserDetails();
            },
            (err)=> {console.log(err);}
      )
       
  }
  getUserDetails(){

    this.loginservive.getUsers().subscribe(
        (res)=> {
console.log(res);




 
        },
        (err)=> {
           console.log(err)
        }
    )
}

}

