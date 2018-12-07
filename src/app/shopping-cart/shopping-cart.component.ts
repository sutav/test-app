import { Component } from '@angular/core';
import { ShoppingCartItem } from './../shared/models/catalog.model';
import * as _ from 'lodash';
import { CatalogService } from '../shared/services/catalog.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  shoppingCartColumns: string[] = ['name', 'quantity', 'price', 'totalPrice', 'delete'];
  items: ShoppingCartItem[];
  constructor(private catalogService: CatalogService) {
    this.items = [];
  }
  deleteFromCart(item: ShoppingCartItem) {
    //TODO: Confirmation of delete action required
    this.catalogService.deleteItem(item.id).subscribe((updatedItems: ShoppingCartItem[]) => {
      this.items = updatedItems;
      //TODO: Notification of successful action required
    }, error => console.log('Could not delete product.'));
  }
  addToCart(item: ShoppingCartItem) {      
    this.catalogService.addItem(item).subscribe((updatedItems: ShoppingCartItem[]) => {
      this.items = updatedItems;
       //TODO: Notification of successful action required
    }, error => console.log('Could not add product.'));
  }

}
