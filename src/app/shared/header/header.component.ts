import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartProdcutsService } from '../../products-module/services/cart-prodcuts.service';
import { LoggedInService } from '../services/logged-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartIcon: any = faCartShopping;
  cartCounter!: any;
  IsLoggedIn: boolean = false;
  constructor(
    private cartCounterService: CartProdcutsService,
    public loggedInService: LoggedInService,
    private route: Router
  ) {}

  ngOnInit() {
    this.cartCounterService
      .getcartProducts()
      .subscribe(
        () => (this.cartCounter = this.cartCounterService.getcartCount())
      );
    // this.loggedInService.getLoggIn().subscribe(data => this.IsLoggedIn)
  }
  logOut() {
    this.route.navigate(['../login']);
    this.loggedInService.setLoggedIn(false);
  }
}
