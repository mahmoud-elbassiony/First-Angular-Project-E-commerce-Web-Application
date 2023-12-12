import { Component } from '@angular/core';
// import products from '../../assets/products-list.json';
import { Product } from '../interfacs/product';
import { ProductsService } from '../services/products.service';
import { CartProdcutsService } from '../services/cart-prodcuts.service';
import { SpinnerServiceService } from 'src/app/shared/spinner-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  // productsData!: {products: Array<Product>};
  productsList!: Array<Product>;

  constructor(
    private productsService: ProductsService,
    public spinnerService: SpinnerServiceService
  ) {}

  ngOnInit() {
    this.productsService.getProductsList().subscribe(
      (data: { products: Array<Product> } | any) => {
        this.productsList = data.products;
      },

      (error) => alert(`${error.status}, ${error.message}`)
    );
  }
}
