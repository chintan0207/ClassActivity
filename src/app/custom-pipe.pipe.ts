import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiusToFahrenheit'
})
export class celsiusToFahrenheit implements PipeTransform {

  transform(celsius: number): number {
    return (celsius * 9/5) + 32;
  }

}


@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}