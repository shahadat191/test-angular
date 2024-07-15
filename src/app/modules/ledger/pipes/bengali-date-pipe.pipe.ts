import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bengaliDate'
})
export class BengaliDatePipe implements PipeTransform {

  // Bengali numerals from 0 to 9
  private bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  // Bengali names of the months
  private bengaliMonths = [
    'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
    'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
  ];

  transform(value: any, ...args: any[]): string {
    if (!value) return value;

    const date = new Date(value);
    const day = this.toBengaliNumerals(date.getDate());
    // Use the month index to get the corresponding Bengali month name
    const month = this.bengaliMonths[date.getMonth()];
    const year = this.toBengaliNumerals(date.getFullYear());

    // Format: DD MonthName YYYY in Bengali
    return `${day} ${month} ${year}`;
  }

  private toBengaliNumerals(number: number): string {
    return number.toString().split('').map(digit => this.bengaliNumerals[parseInt(digit, 10)]).join('');
  }
}
