import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  files: String[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService
      .getFiles()
      .subscribe((files: String[]) => (this.files = files));
  }
}
