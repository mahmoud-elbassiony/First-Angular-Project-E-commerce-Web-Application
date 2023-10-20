import { Component } from '@angular/core';
// import products from '../../assets/products-list.json';
import { Product } from '../interfacs/product';
import { ProductsService } from '../services/products.service';
import { CartProdcutsService } from '../services/cart-prodcuts.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  // productsList: Array<Product> = products;
  productsData!: any;
  productsList!: Array<Product>;
  cartProducts!: Product[];

  constructor(
    private productsService: ProductsService,
    private cartProductsService: CartProdcutsService
  ) {}

  ngOnInit() {
    this.productsService.getProductsList().subscribe(
      (data) => {
        this.productsData = data;
        this.productsList = this.productsData.products;
      },

      (error) => alert(`${error.status}, ${error.message}`)
    );

    this.cartProductsService
      .getcartProducts()
      .subscribe((data) => (this.cartProducts = data));
  }
}
