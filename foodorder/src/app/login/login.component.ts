import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  
  user:User=new User();
  users:Users = new Users();
  
  constructor(private registerService : RegisterService,private loginService:LoginService,
    private http:HttpClient, private router:Router,private formBuilder:FormBuilder) {}
    ngOnInit():void{
   }

    userRegister(){
      console.log(this.user);
      this.registerService.registerUser(this.user).subscribe(data=>
        {
          alert("User Registration is Successful")
        },
        error=>alert("User Registration is UnSuccessful")
        );
    }

  userLogin(){
    console.log(this.users);
    this.loginService.loginUser(this.users).subscribe(data=>{
     // this.router.navigate(['/header']).then(()=> window.location.reload());
    this.router.navigate(['/main']);
      alert("Login is Successful!!!");
    },error=>alert("Sorry please enter correct UserId and Password"));
  }

 afterLogin():void{
  this.loginService.login().then(() => {
   
  })
 }
}
