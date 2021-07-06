import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { InvoicesComponent } from './invoices/invoices.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { FilesComponent } from './files/files.component';
import { UploadComponent } from './upload/upload.component';
import { FileDetailComponent } from './file-detail/file-detail.component';
import { FileRowComponent } from './file-row/file-row.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateRowComponent } from './create-row/create-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    InvoicesComponent,
    InvoiceDetailComponent,
    FilesComponent,
    UploadComponent,
    FileDetailComponent,
    FileRowComponent,
    CreateInvoiceComponent,
    CreateRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false,
    // }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
