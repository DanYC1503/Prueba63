import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeudasServiceService {
  private baseUrl = 'http://localhost:18080/Prueba63/rs/deudas';

  constructor(private http: HttpClient) {}

  getDeudasPorCedula(cedula: string): Observable<any> {
    const url = `${this.baseUrl}/${cedula}`;
    return this.http.get(url);
  
}
  
}