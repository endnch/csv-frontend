import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../invoice';
import { Location } from '@angular/common';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css'],
})
export class InvoiceDetailComponent implements OnInit {
  invoice?: Invoice;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.invoiceService
      .getInvoice(id)
      .subscribe((invoice) => (this.invoice = invoice));
  }

  save(): void {
    if (this.invoice) {
      this.invoiceService
        .updateInvoice(this.invoice)
        .subscribe(() => console.log('Invoice updated'));
    }
  }

  delete(invoice: Invoice): void {
    if (invoice) {
      this.invoiceService
        .deleteInvoice(invoice)
        .subscribe(() => this.location.back());
    }
  }
}
