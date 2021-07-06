import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../file.service';
import { Invoice } from '../invoice';
import { Row } from '../row';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrls: ['./file-detail.component.css'],
})
export class FileDetailComponent implements OnInit {
  rows: Row[] = [];
  name: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.getFile();
  }

  getFile(): void {
    this.name = this.route.snapshot.paramMap.get('name');

    if (this.name) {
      this.fileService
        .getFile(this.name)
        .subscribe((rows) => (this.rows = rows));
    }
  }
}
