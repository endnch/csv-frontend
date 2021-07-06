import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../file.service';
import { Row } from '../row';
import { Location } from '@angular/common';

@Component({
  selector: 'app-file-row',
  templateUrl: './file-row.component.html',
  styleUrls: ['./file-row.component.css'],
})
export class FileRowComponent implements OnInit {
  row?: Row;
  index?: number;

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRow();
  }

  getRow(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.index = Number(this.route.snapshot.paramMap.get('index'));

    if (name !== null && this.index !== undefined) {
      this.fileService
        .getRow(name, this.index)
        .subscribe((row) => (this.row = row));
    }
  }

  save(): void {
    const name = this.route.snapshot.paramMap.get('name');

    if (this.row !== undefined && name !== null && this.index !== undefined) {
      this.fileService
        .updateRow(this.row, name, this.index)
        .subscribe(() => console.log('Row updated'));
    }
  }

  delete(index: number | undefined): void {
    const name = this.route.snapshot.paramMap.get('name');

    if (name !== null && index !== undefined) {
      this.fileService.deleteRow(name, index).subscribe(() => {
        console.log('Row deleted');
        this.location.back();
      });
    }
  }
}
