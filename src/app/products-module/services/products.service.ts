import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfacs/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductsList() {
    return this.http.get<Product[]>(`https://dummyjson.com/products`);
    // return this.http.get(`https://dummyjson.com/products`);
  }

  getProductDetails(id: string) {
    return this.http.get<Product>(` https://dummyjson.com/products/${id}`);
  }
}
