import { Component } from "@angular/core";
import { WindowRefService } from "../WindowRefServiceservice";

@Component({
  selector: "app-add-to-cart",
  standalone: true,
  imports: [],
  templateUrl: "./add-to-cart.component.html",
  styleUrl: "./add-to-cart.component.scss",
})
export class AddToCartComponent {
  options: any;
  rzp1: any;
  constructor(public WindowRef: WindowRefService) {}
  ngOnInit() {
    this.options = {
      key: "rzp_test_aQOt5eEt6jOFSk",
      amount: "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Online Book Store", //your business name
      description: "Test Transaction",
      image:
        "https://www.postermywall.com/index.php/posterbuilder/copy/33f3abd4285d1eeccd6c235cbeb0b964",
      order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "test", //your customer's name
        email: "test@example.com",
        contact: "1236547895", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
  }

  PayNow() {
    // var rzp1 = new Razorpay(options);
    this.WindowRef.nativeWindow
    this.rzp1 = new this.WindowRef.nativeWindow["Razorpay"](this.options);
    this.rzp1.open();
    console.log(this.options);
  }
}
