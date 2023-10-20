import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerServiceService } from './spinner-service.service';

@Injectable()
export class RequestInterceptorInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerServiceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();

    return next
      .handle(request)
      .pipe(finalize(() => this.spinnerService.hide()));
  }
}
