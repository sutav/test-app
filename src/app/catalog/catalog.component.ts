import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product, ShoppingCartItem } from './../shared/models/catalog.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './../shared/services/product.service';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [ProductService]
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  catalogForm: FormGroup;
  price: number;
  selectedProductId: number;
  shoppingCartItem: ShoppingCartItem;
  @Output() productAdded = new EventEmitter<ShoppingCartItem>();
  constructor(private productService: ProductService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.catalogForm = new FormGroup({
      'productId': new FormControl(''),
      'quantity': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
    });

    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    }, error => console.log('Could not load products.'));

  }
  onSelectionChange(id: string) {
    alert(id);
  }
  addProduct() {
    if (this.catalogForm.valid) {
      let product = _.find(this.products, (p: Product) => {
        return p.id === this.catalogForm.value.productId;
      });
      this.shoppingCartItem = {
        id: uuid(),
        product: product,
        quantity: this.catalogForm.value.quantity,
        price: this.catalogForm.value.price,
        totalPrice: this.catalogForm.value.price * this.catalogForm.value.quantity
      }
      this.productAdded.emit(this.shoppingCartItem);
    }
  }

}
