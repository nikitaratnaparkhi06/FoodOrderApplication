import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { RatingModule } from 'ng-starrating';
import { PaymentComponent } from './payment/payment.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    FoodpageComponent,
    CartPageComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
   
    PaymentComponent,
    MainComponent,
    RegisterComponent,
    LoginuserComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
  HttpClientModule,
  RouterModule,
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
   RatingModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
