import { Product, ShoppingCartItem } from '../../models/catalog.model';
import { unescapeIdentifier } from '@angular/compiler';
import { v4 as uuid } from 'uuid';
export const product: Product = {
    id: 1,
    name: 'Red Socks'
};
export const shoppingCartItem = {   
    productId: product.id,
    quantity: 1,
    price: 3.99
};
