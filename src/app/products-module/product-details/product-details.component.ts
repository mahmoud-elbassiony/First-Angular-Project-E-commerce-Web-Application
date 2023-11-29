import { Component } from '@angular/core';
// import products from '../../assets/products-list.json';
import { Product } from '../interfacs/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartProdcutsService } from '../services/cart-prodcuts.service';
import { SpinnerServiceService } from 'src/app/shared/spinner-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productDetails!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private cartProductsService: CartProdcutsService,
    public spinnerService: SpinnerServiceService
  ) {}

  imgSrc!: string;

  ngOnInit() {
    this.productService
      .getProductDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (data) => {
          this.productDetails = data;
          this.imgSrc = this.productDetails.images[0];
        },
        (error) => alert(`${error.status}, ${error.message}`)
      );
  }

  changeImg(index: number) {
    this.imgSrc = this.productDetails.images[index];
  }

  addToCartF(product: Product) {
    this.cartProductsService.setcartProducts(product);
  }
}
