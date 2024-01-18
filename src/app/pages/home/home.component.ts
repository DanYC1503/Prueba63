import { Component } from '@angular/core';
import { DeudasServiceService } from 'src/app/services/deudas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cedula: string | undefined;
  deudas: any[] = [];

  constructor(private deudasService: DeudasServiceService) {
    
  }

  buscarCedula() {
    if (this.cedula) {
      this.deudasService.getDeudasPorCedula(this.cedula)
        .subscribe(
          data => {
            this.deudas = data;
          },
          error => {
            console.error('Error in buscarCedula:', error);
            // Handle the error as needed (e.g., show a user-friendly message)
          }
        );
    }
  }
}
