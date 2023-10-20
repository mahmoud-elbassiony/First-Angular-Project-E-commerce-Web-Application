// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductsModuleModule } from './products-module/products-module.module';
import { AuthMdModule } from './auth-md/auth-md.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorInterceptor } from './shared/request-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductsModuleModule, AuthMdModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
