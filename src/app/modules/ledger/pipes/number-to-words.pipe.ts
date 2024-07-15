import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  singleDigits = ['শূন্য', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়'];
  bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  scalesInWord = ['কোটি', 'লাখ', 'হাজার', 'শত']; // Adjust based on the maximum number you expect to convert
  scales = [10000000, 100000, 1000, 100, 10]; // Adjust based on the maximum number you expect to convert

  transform(value: number | null | undefined, args?: any): string {
    if (value === null || value === undefined || value == 0) return '';

    return this.convertToWordsBengali(value) + ' টাকা';
  }

  convertToWordsBengali(num: number): string {
    if (num < 10) return this.bengaliNumerals[num];
    if (num < 100) return this.bengaliNumerals[Math.floor(num / 10)] + this.bengaliNumerals[num%10];

    for(let index = 0; index < this.scales.length; index++) {
      const scale = this.scales[index];
      const scaleInWord = this.scalesInWord[index];
      if(num > scale) {
        return this.convertToWordsBengali(Math.floor(num / scale)) + ' ' + scaleInWord  + (num % scale ? ' ' + this.convertToWordsBengali(num % scale) : '')
      }
    }

    // Extend the logic here for larger numbers if necessary
  
    return num.toString(); // As a fallback, return the number as a string
  }

}
