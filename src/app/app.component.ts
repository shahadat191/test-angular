import { Component } from '@angular/core';
import { Column } from 'src/models/column.model';
import { Data } from 'src/models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  // Define your columns
  columns: Column[] = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Quantity', key: 'quantity' }
  ];

  // Sample data for the table
  tableData: Data[] = [
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 2, name: 'Item 2', quantity: 15 },
    { id: 3, name: 'Item 3', quantity: 20 },
  ];

  exportToCSV() {
    let csvData = this.convertToCSV(this.tableData);
    let blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    let url = window.URL.createObjectURL(blob);

    // Creating a temporary link element for downloading the CSV file
    let tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.download = 'table-data.csv';
    tempLink.style.visibility = 'hidden';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }

  private convertToCSV(data: Data[]): string {
   // Get the headers (keys of the objects)
   const headers = Object.keys(data[0]);

   // Map each row data to an array
   const csvRows = data.map(row => {
       return headers.map(fieldName => {
           let fieldValue = row[fieldName];
           // If the field value contains a comma, wrap it in double quotes
           if (fieldValue && fieldValue.toString().includes(',')) {
               fieldValue = `"${fieldValue}"`;
           }
           return fieldValue;
       }).join(',');
   });

   // Combine headers and rows
   return [headers.join(',')].concat(csvRows).join('\r\n');
  }
}
