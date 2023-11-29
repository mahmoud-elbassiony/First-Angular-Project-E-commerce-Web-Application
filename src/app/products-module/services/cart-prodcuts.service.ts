import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfacs/product';

@Injectable({
  providedIn: 'root',
})
export class CartProdcutsService {
  private cartProducts = new BehaviorSubject<Product[]>([]);
  constructor() {}

  getcartProducts() {
    return this.cartProducts.asObservable();
  }

  getcartCount() {
    return this.cartProducts.value.reduce((acc, current) => {
      if (current.quantity !== undefined) {
        return acc + current.quantity;
      } else {
        return acc;
      }
    }, 0);
  }

  decreaseCount(product: Product) {
    let index = this.cartProducts.value.findIndex(
      (pro) => pro.id == product.id
    );

    let quantity = this.cartProducts.value[index].quantity;

    this.cartProducts.value[index] = {
      ...this.cartProducts.value[index],
      quantity: quantity ? --quantity : 0,
    };

    this.cartProducts.next(this.cartProducts.value);
  }

  removeProduct(product: Product) {
    let index = this.cartProducts.value.findIndex(
      (pro) => pro.id == product.id
    );

    this.cartProducts.value.splice(index, 1);
    this.cartProducts.next(this.cartProducts.value);
  }

  getTotall(): number {
    let total = 0;
    for (let product of this.cartProducts.value) {
      if (product.quantity) {
        total +=
          product.price *
          (1 - product.discountPercentage / 100) *
          product.quantity;
      }
    }
    console.log(total);
    return total;
  }

  setcartProducts(product: Product) {
    let index = this.cartProducts.value.findIndex(
      (pro) => pro.id == product.id
    );

    if (index == -1) {
      product = { ...product, quantity: 1 };
      this.cartProducts.value.push(product);
    } else {
      let quantity = this.cartProducts.value[index].quantity;

      if (quantity) {
        if (product.stock > quantity) {
          this.cartProducts.value[index] = {
            ...this.cartProducts.value[index],
            quantity: ++quantity,
          };
        }
      }
    }

    this.cartProducts.next(this.cartProducts.value);
  }
}
