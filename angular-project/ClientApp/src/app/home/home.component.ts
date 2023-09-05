import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public username='Akhila';
  public texts="text-s";
  duname : string ='';
  dpw : string ='';
  errorMessage : string ='';   
  vuname: string  ='akhila';
  vpw : string ='1234'; 
    constructor(private router: Router) {
    }  
   public login()
   {
     if(this.duname===this.vuname && this.dpw===this.vpw)
     {
      this.router.navigate(['/main']);
       console.log('success');
     }
     else{
        this.errorMessage="Incorrect UserName and Password";
     }
  }
  public navigatetoregister()
  {
    this.router.navigate(['/register']);
  }


}

