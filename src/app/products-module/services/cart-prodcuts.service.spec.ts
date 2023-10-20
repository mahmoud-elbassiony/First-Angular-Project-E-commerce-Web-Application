import { TestBed } from '@angular/core/testing';

import { CartProdcutsService } from './cart-prodcuts.service';

describe('CartProdcutsService', () => {
  let service: CartProdcutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartProdcutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
