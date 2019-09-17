import { Pipe, PipeTransform } from '@angular/core';
/* Angular ignores changes within(composite) objects.
It won't call a pure pipe if you change an input month, add to
an input array, or update an input object property.
 An object reference check is fast—much faster 
 than a deep check for differences
 Pure pip calls only if new object created by copying old object and adding new item to it 
 Inpure pip is called every mili second mouse move or items added to array 
 Pipes are a great way to encapsulate and share common display-value 
 transformations. Use them like styles, dropping them into your
  template's expressions to enrich the appeal and usability of your views.*/
@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent?: number): number {
        return Math.pow(value, isNaN(exponent) ? 1 : exponent);
    }
}