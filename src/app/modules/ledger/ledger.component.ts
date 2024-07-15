import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LedgerService } from './services/ledger.service';
import { LedgerTransaction } from './models/transaction';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss'],
})
export class LedgerComponent implements OnInit {
  @ViewChild('divToCapture', { static: false }) divToCapture!: ElementRef;

  transactions: LedgerTransaction[] = [];
  finalBalance: number = 0;
  lastUpdated: Date | undefined;

  constructor(private ledgerService: LedgerService) {
    this.lastUpdated = new Date();
  }

  ngOnInit(): void {
    this.ledgerService.getTransactions().subscribe((items) => {
      this.transactions = items;
      this.calculateBalance();
    });
  }
  calculateBalance() {
    for (const item of this.transactions) {
      this.finalBalance += item.amountReceived - item.amountGiven;
      item.balance = this.finalBalance;
    }
  }

  captureDiv() {
    html2canvas(this.divToCapture.nativeElement).then((canvas) => {
      // Create an image URL from the canvas
      const imageURL = canvas.toDataURL('image/png');

      // Create a temporary link to initiate the download
      const downloadLink = document.createElement('a');
      downloadLink.href = imageURL;
      downloadLink.download = 'captured-image.png'; // Name the image file

      // Append to the document and trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up by removing the temporary link
      document.body.removeChild(downloadLink);
    });
  }
}
