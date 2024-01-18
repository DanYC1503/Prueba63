import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeudasServiceService {

  constructor(private http: HttpClient) {}

  getDeudasPorCedula(cedula: any) {
    return this.http.get<any>('http://localhost:18080/Prueba63/rs/deudas/' + cedula)
  
  }
  
}