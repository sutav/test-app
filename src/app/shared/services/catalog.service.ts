import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShoppingCartItem, ShoppingCart } from '../models/catalog.model';
import * as _ from 'lodash';

@Injectable({
   providedIn: 'root'
})
export class CatalogService {
   shoppingCart: ShoppingCart;
   constructor() {
      this.shoppingCart = new ShoppingCart();
   }
   addItem(item: ShoppingCartItem): Observable<ShoppingCartItem[]> {
      this.shoppingCart.items.push(item);
      return of(this.shoppingCart.items);
   }
   deleteItem(id: string): Observable<ShoppingCartItem[]> {
      let selectedItemIndex = _.findIndex(this.shoppingCart.items, (i: ShoppingCartItem) => {
         return i.id === id;
      });
      this.shoppingCart.items.splice(selectedItemIndex, 1);
      return of(this.shoppingCart.items);
   }
   getShoppingCartItems(): Observable<ShoppingCartItem[]> {
      return of(this.shoppingCart.items);
   }
}
