import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];
  @Output() increaseQty: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decreaseQty: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() remove: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem): void{
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem): void{
    this.decreaseQty.emit(item);
  }

  emitRemoveQty(item: CartItem): void{
    this.remove.emit(item);
  }

}
