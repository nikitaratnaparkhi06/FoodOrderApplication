import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServiceService } from '../order-service.service';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  
  form: any = {}; 
  constructor(private http: HttpClient,
    private orderService:OrderServiceService,private router:Router) {
  }
  
  ngOnInit() {
  }
  sayHello() {
    alert("Hello DK");
  }

  message:any = "Not yet stared";
  paymentId!: string;
  error!:string;
  options = {
    "key": "",
    "amount": "",
    "name": "Nikita Ratnaparkhi",
    "description": "Web Development",
    "image": "",
    "order_id": "assets/11.jpeg",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  onSubmit():void {
    this.paymentId = '';
    this.error = '';
    this.orderService.createOrder(this.form).subscribe(
      data => {
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
    this.options.amount = data.applicationFee; //paise
    this.options.prefill.name = "Nikita Ratnaparkhi"
    this.options.prefill.email = "nikita.06r@gmail.com";
    this.options.prefill.contact = "8329635352";
    
    if(data.pgName ==='razor2') {
      this.options.image="";
      var rzp1 = new Razorpay(this.options);
      rzp1.open();
    } else {
      var rzp2 = new Razorpay(this.options);
      rzp2.open();
    }
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    });
  },
      err => {
        this.error = err.error.message;
      }
      );
}
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event:{ detail: any; }): void {
    this.message = "Success Payment";
     console.log(event.detail);
  }

}


