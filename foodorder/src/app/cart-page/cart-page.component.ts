import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService: CartService,private foodService:FoodService){
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart=cart;
    this.setCart(); 
  })
  }
    ngOnInit():void{
    }
    setCart(){
      this.cart = this.cartService.getCart();
    }
    removeFromCart(cartItem:CartItem){
      this.cartService.removeFromCart(cartItem.food.id);
      this.setCart(); //Instance Load Data
    }
    changeQuantity(cartItem:CartItem,quantityInString:string){
      const quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(cartItem.food.id,quantity);
      this.setCart();
    }
  }



