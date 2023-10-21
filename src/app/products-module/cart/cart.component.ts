import { Component } from '@angular/core';
import { CartProdcutsService } from '../services/cart-prodcuts.service';
import { Product } from '../interfacs/product';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  faPlus: any = faPlus;
  faMinus: any = faMinus;
  faXmark: any = faXmark;
  cartProducts!: Product[];
  total: number = 0;
  constructor(private cartProductsService: CartProdcutsService) {}

  ngOnInit() {
    this.cartProductsService.getcartProducts().subscribe((data) => {
      this.cartProducts = data;
      this.total = this.cartProductsService.getTotall();
    });
  }

  increase(product: Product) {
    if (product.quantity !== undefined) {
      if (product.stock > product.quantity)
        this.cartProductsService.setcartProducts(product);
    }
  }
  decrease(product: Product) {
    if (product.quantity && product.quantity != 1) {
      this.cartProductsService.decreaseCount(product);
    }
  }

  removeProduct(product: Product) {
    this.cartProductsService.removeProduct(product);
  }
}
