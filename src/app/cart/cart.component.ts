import { Component } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    alert('Your order is placed');
    this.checkoutForm.reset();
    this.router.navigate(['']);
  }
}
