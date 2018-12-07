import { Component, ViewChild } from '@angular/core';
import { Product, ShoppingCartItem } from './shared/models/catalog.model';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  @ViewChild(ShoppingCartComponent) shoppingCart: ShoppingCartComponent;

  onProductAdded(item: ShoppingCartItem) {
    this.shoppingCart.addToCart(item);
  }
}
