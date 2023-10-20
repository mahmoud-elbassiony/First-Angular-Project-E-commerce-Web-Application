import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discount: number): any {
    if (discount) {
      return value * (1 - discount / 100);
    }
  }
}
