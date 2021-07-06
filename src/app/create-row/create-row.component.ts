import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../file.service';
import { Row } from '../row';

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.component.html',
  styleUrls: ['./create-row.component.css'],
})
export class CreateRowComponent implements OnInit {
  row: Row = {
    Fecha: '',
    Hora: '',
    Consumo: '',
    Precio: '',
    Coste: '',
  };

  constructor(
    private fileService: FileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  create(): void {
    const name = this.route.snapshot.paramMap.get('name');

    if (name !== null) {
      this.fileService
        .createRow(this.row, name)
        .subscribe(() => console.log('Row created'));
    }
  }
}
