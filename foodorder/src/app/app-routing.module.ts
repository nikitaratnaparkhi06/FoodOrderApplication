import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { LoginuserComponent } from './loginuser/loginuser.component';
import { MainComponent } from './main/main.component';
import { PaymentComponent } from './payment/payment.component';
//import { RegisterComponent } from './register/register.component';


const routes: Routes = [
 {path:'',component:LoginComponent},
 //{path:'',component:RegisterComponent},
 //{path:'loginuser',component:LoginuserComponent},
  {path:'main',component:MainComponent},
  {path:'home',component:HomeComponent},
  { path:'search/:searchItem',component:HomeComponent},
  { path:'tag/:tag',component:HomeComponent},
  { path:'food/:id',component:FoodpageComponent},
  { path:'cart-page',component:CartPageComponent},
  {path:'payment',component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
