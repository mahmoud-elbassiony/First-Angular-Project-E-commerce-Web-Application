import { Component } from '@angular/core';
// import products from '../../assets/products-list.json';
import { Product } from '../interfacs/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartProdcutsService } from '../services/cart-prodcuts.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productDetails!: Product;

  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.productslist = products;
  // }

  // ngOnInit() {
  //   this.productDetails = this.productslist.find(
  //     (product) => product.id == this.activatedRoute.snapshot.params['id']
  //   );
  //   this.imgSrc = this.productDetails.images[0];
  // }

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private cartProductsService: CartProdcutsService
  ) {
    console.log(this.productDetails);
  }

  imgSrc!: string;

  ngOnInit() {
    this.productService
      .getProductDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (data) => {
          this.productDetails = data;
          console.log(this.productDetails);
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