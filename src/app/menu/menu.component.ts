import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
logout(){
  
  const t=window.confirm("Are you sure you want to logout")
  if(t==true){
    window.location.href=''
  }
}

}

