import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadFile(formData: FormData): Observable<any> {
    const url = 'http://localhost:8000/api/csv/upload';

    return this.http
      .post(url, formData)
      .pipe(tap((_) => console.log(`uploaded file`)));
  }
}
