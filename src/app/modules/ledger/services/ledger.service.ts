import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {LedgerTransaction} from './../models/transaction'

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  private apiUrl = 'http://localhost:3000/transactions';
  constructor(private http: HttpClient) { }

  getTransactions(): Observable<LedgerTransaction[]> {
    return this.http.get<LedgerTransaction[]>(this.apiUrl);
  }
}
