import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  getFiles(): Observable<String[]> {
    const url = 'http://localhost:8000/api/csv/getNameFiles';

    return this.http.get<String[]>(url).pipe(
      tap((_) => console.log('fetched files')),
      map((res: any) => res.files)
    );
  }
}
