import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerRoutingModule } from './ledger-routing.module';
import { LedgerComponent } from './ledger.component';
import { HttpClientModule } from '@angular/common/http';
import { NumberToWordsPipe } from './pipes/number-to-words.pipe';
import { BengaliDatePipe } from './pipes/bengali-date-pipe.pipe';


@NgModule({
  declarations: [
    LedgerComponent,
    NumberToWordsPipe,
    BengaliDatePipe
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    LedgerRoutingModule
  ]
})
export class LedgerModule { }
