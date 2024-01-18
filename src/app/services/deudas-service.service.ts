import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; // Import Http and Response from '@angular/http' module
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeudasServiceService {
  private baseUrl = 'http://localhost:18080/Prueba63/rs/deudas';

  constructor(private httpDeudas: Http) {}

  getDeudasPorCedula(cedula: string): Observable<any[]> {
    const url = `${this.baseUrl}/${cedula}`;
    return this.httpDeudas.get(url)
      .pipe(
        map((response: Response) => response.json()), // Extract JSON data
        catchError((error: any) => {
          console.error('Error fetching data:', error);
          return Observable.throw(error); // Rethrow the error to propagate it to the component
        })
      );
  }
}
