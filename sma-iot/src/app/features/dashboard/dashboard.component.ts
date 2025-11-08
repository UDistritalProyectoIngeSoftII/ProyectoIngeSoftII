import { Component } from '@angular/core';
import { Station } from '../../shared/models/station.model';
import { MapViewerComponent } from '../../shared/components/map-viewer/map-viewer.component';

@Component({
  selector: 'dashboard',
  imports: [ MapViewerComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
/**
 * Componente Contenedor. Gestiona los datos (lógica de negocio).
 * (ISO/IEC 25010 - Cohesiónn: Contiene la lógica y los datos de la Feature).
 */
export class DashboardComponent {

  // Mock con los datos de las estaciones. Para implementar más adelante, un StationDataService, el cual se conectará a AWS para obtener la información de las estaciones.
  stationData: Station[] = [
    { id: 'A001', nombre: 'Estación Central', lat: 4.6097, lon: -74.0671, estado: 'Activo' },
    { id: 'A002', nombre: 'Estación Norte', lat: 4.7110, lon: -74.0721, estado: 'Activo' },
    { id: 'A003', nombre: 'Estación Occidente', lat: 4.6738, lon: -74.1200, estado: 'Inactivo' }
  ];

}
