import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

const INVOICES: Invoice[] = [
  {
    date: '2018-12-01 ',
    hour: ' 6.0 ',
    consumption: ' 10.0 ',
    price: '0.08',
    costPerHour: '0.00',
  },
];

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(): void {
    this.invoiceService
      .getInvoices()
      .subscribe((invoices) => (this.invoices = invoices));
  }
}
