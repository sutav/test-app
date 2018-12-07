
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ShoppingCartItem, ShoppingCart } from '../../shared/models/catalog.model';
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
 })
  export class ShoppingCartDataSource {
    shoppingCart: ShoppingCart;
    constructor(private items: ShoppingCartItem[]) {   
        this.shoppingCart = new ShoppingCart();  
    }    
    getItems(): Observable<ShoppingCartItem[]> {
      return of(this.shoppingCart.items);
    }
   
  }