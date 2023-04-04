import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // cartQuantity = 0;
  // user!:User;
  //  constructor(cartService:CartService){
  //    cartService.getCartObservable().subscribe((newCart)=>{
  //      this.cartQuantity = newCart.totalCount;
  //    })
     // userService.userObservable.subscribe((newUser: User)=>{
     //   this.user = newUser;
     // })
   
   ngOnInit():void{
       
   }
   // logout(){
   //   this.userService.logout();
   // }
   // get isAuth(){
   //   return this.user.token;
   // }
}
