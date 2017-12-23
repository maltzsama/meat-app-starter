import { ShoppingCartServices } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartServices: ShoppingCartServices) { }

  ngOnInit() {
  }

  items(): any {
    return this.shoppingCartServices.items;
  }
  total(): number {
    return this.shoppingCartServices.total();
  }
}
