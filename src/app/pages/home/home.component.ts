import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeudasServiceService } from 'src/app/services/deudas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cedula?: string ;
  deudas: any[] = [];

  constructor(private deudasService: DeudasServiceService) {
    
  }

  buscarCedula() {
    if (this.cedula) {
      this.deudasService.getDeudasPorCedula(this.cedula)
        
    }
  }
}
