import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { FilesComponent } from './files/files.component';
import { UploadComponent } from './upload/upload.component';
import { FileDetailComponent } from './file-detail/file-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/invoices', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoice/:id', component: InvoiceDetailComponent },
  { path: 'files', component: FilesComponent },
  { path: 'file/:name', component: FileDetailComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
