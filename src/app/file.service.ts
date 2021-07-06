import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Row } from './row';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getFiles(): Observable<String[]> {
    const url = 'http://localhost:8000/api/csv/getNameFiles';

    return this.http.get<String[]>(url).pipe(
      tap((_) => console.log('fetched files')),
      map((res: any) => res.files)
    );
  }

  getFile(name: string): Observable<Row[]> {
    const url = `http://localhost:8000/api/csv/getCsvData/${name}`;

    return this.http.get<Row[]>(url).pipe(
      tap((_) => console.log(`fetched file name=${name}`)),
      map((res: any) => res.data)
    );
  }

  getRow(name: string, index: number): Observable<Row> {
    const url = `http://localhost:8000/api/csv/getCsvData/${name}`;

    return this.http.get<Row[]>(url).pipe(
      tap((_) => console.log(`fetched row filename=${name} index=${index}`)),
      map((res: any) => res.data[index - 1])
    );
  }

  updateRow(row: Row, name: string, index: number): Observable<any> {
    if (index < 1) {
      throw new Error('Invalid index');
    }

    const url = `http://localhost:8000/api/csv/store/${index}/${name}`;

    return this.http
      .put(
        url,
        {
          method: 'PUT',
          date: row.Fecha,
          hour: row.Hora,
          consumption: row.Consumo,
          price: row.Precio,
          costPerHour: row.Coste,
        },
        this.httpOptions
      )
      .pipe(tap((_) => console.log(`updated row name=${name} index=${index}`)));
  }

  deleteRow(name: string, index: number): Observable<any> {
    if (index < 1) {
      throw new Error('Invalid index');
    }

    const url = `http://localhost:8000/api/csv/store/${index}/${name}`;

    return this.http
      .put(
        url,
        {
          method: 'DELETE',
        },
        this.httpOptions
      )
      .pipe(tap((_) => console.log(`deleted row name=${name} index=${index}`)));
  }

  createRow(row: Row, name: string): Observable<any> {
    const url = `http://localhost:8000/api/csv/store/${name}`;

    return this.http
      .post(
        url,
        {
          method: 'POST',
          date: row.Fecha,
          hour: row.Hora,
          consumption: row.Consumo,
          price: row.Precio,
          costPerHour: row.Coste,
        },
        this.httpOptions
      )
      .pipe(tap((_) => console.log(`created new row in filename=${name}`)));
  }
}
