import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css'],
})
export class CreateInvoiceComponent implements OnInit {
  invoice: Invoice = {
    date: '',
    hour: '',
    consumption: '',
    price: '',
    costPerHour: '',
  };

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {}

  create(): void {
    if (this.invoice) {
      this.invoiceService.createInvoice(this.invoice).subscribe(() => {
        console.log('Invoice created');

        this.invoice = {
          date: '',
          hour: '',
          consumption: '',
          price: '',
          costPerHour: '',
        };
      });
    }
  }
}
