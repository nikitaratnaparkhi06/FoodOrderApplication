import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  //   user:User=new User();
  // constructor(private registerService : RegisterService,private router:Router) {}
  ngOnInit():void{
  }
  // userRegister(){
  //   console.log(this.user);
  //   this.registerService.registerUser(this.user).subscribe(data=>
  //     {
  //       alert("User Registration is Successful")
  //     },
  //     error=>alert("User Registration is UnSuccessful")
  //     );
  // }
    
  // afterRegister():void{
  //   this.registerService.register().then(() => {
  //     this.router.navigate(['/loginuser']);
  //   })
  //  }
}
