import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Users } from '../users';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit{
   
  // users:Users = new Users();
  // constructor(private loginService:LoginService,private router:Router){ }
    ngOnInit(): void {
    }
    
  //   userLogin(){
  //     console.log(this.users);
  //     this.loginService.loginUser(this.users).subscribe(data=>{
  //       alert("Login is Successful!!!");

  //     },error=>alert("Sorry please enter correct UserId and Password"));
  //   }

    // afterLogin():void{
    //   this.loginService.login().then(() => {
    //     this.router.navigate(['/main']);
    //   })
    //  }
}
