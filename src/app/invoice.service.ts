import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from './invoice';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getInvoices(): Observable<Invoice[]> {
    const url = 'http://localhost:8000/api/csv/invoices';

    return this.http
      .get<Invoice[]>(url)
      .pipe(tap((_) => console.log('fetched invoices')));
  }

  getInvoice(id: string | null): Observable<Invoice> {
    const url = `http://localhost:8000/api/csv/invoice/${id}`;

    return this.http.get<Invoice>(url).pipe(
      tap((_) => console.log(`fetched invoice id=${id}`)),
      map((res: any) => res.qInvoice)
    );
  }

  updateInvoice(invoice: Invoice): Observable<any> {
    const url = `http://localhost:8000/api/csv/invoice/${invoice._id}`;

    return this.http
      .put(url, invoice, this.httpOptions)
      .pipe(tap((_) => console.log(`updated invoice id=${invoice._id}`)));
  }

  deleteInvoice(invoice: Invoice): Observable<Invoice> {
    const url = `http://localhost:8000/api/csv/invoice/${invoice._id}`;

    return this.http
      .delete<Invoice>(url, this.httpOptions)
      .pipe(tap((_) => console.log(`deleted invoice id=${invoice._id}`)));
  }
}
