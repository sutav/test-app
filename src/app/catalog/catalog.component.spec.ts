import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CatalogComponent } from './catalog.component';
import { ProductService } from './../shared/services/product.service';
import { products } from '../shared/data/products.data';
import { product, shoppingCartItem } from '../shared/data/mocks/product';
import { of, Observable } from 'rxjs';
import { Product } from '../shared/models/catalog.model';

class ProductServiceStub extends ProductService {

  /**
   * Currently is the same as ProductService method
   * but once that one is pointed to call api
   * this still gonna return a value we wish to test against
   */
  getProducts(): Observable<Product[]> {
    return of(products);
  }
}


describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogComponent],
      providers: [
        FormBuilder
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(CatalogComponent, {
        set: {
          providers: [
            { provide: ProductService, useClass: ProductServiceStub },
          ]
        }
      })
      .compileComponents() 
      .then(() => {
        fixture = TestBed.createComponent(CatalogComponent);
        component = fixture.componentInstance;
      });
  }));

  function addProductToCart(product, quantity, price) {
    component.catalogForm.controls['productId'].setValue(product.id);
    component.catalogForm.controls['quantity'].setValue(quantity);
    component.catalogForm.controls['price'].setValue(price);
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('form value should update from form changes', fakeAsync(() => {
    addProductToCart(product, shoppingCartItem.quantity, shoppingCartItem.price);
    expect(component.catalogForm.value).toEqual(shoppingCartItem);
  })); 
  it('should add corect prtoduct to shopping cart item on submit', fakeAsync(() => {
    addProductToCart(product, 1, 9.99);
    component.addProduct();
    expect(component.shoppingCartItem.product).toEqual(product);
  }));
});
