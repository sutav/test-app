import { Observable, BehaviorSubject } from  'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/catalog.model';
import { products } from '../data/products.data';

@Injectable()
export class ProductService {
    productsResult : BehaviorSubject<Product[]>
    constructor() {
       this.productsResult =  <BehaviorSubject<Product[]>>new BehaviorSubject(products);
    }
    
    getProducts(): Observable<Product[]> {
        //TODO: this can contain call to api to get products list        
        return this.productsResult.asObservable();
    }

    
}
