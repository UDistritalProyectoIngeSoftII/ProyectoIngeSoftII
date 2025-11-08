import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnDestroy } from '@angular/core';
import { MapProviderService } from '../../services/map-provider.service';
import * as L from 'leaflet'; // Solo para tipado, la lógica está en el servicio

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.css',
})

/**
 *  Componente Presentacional (Dumb) para la visualización del mapa.
 *  Recibe datos por Input y utiliza el servicio MapProviderService.
 *  (ISO/IEC 25-10 - Reusabilidad)
 */

export class MapViewerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapElement') mapElement!: ElementRef<HTMLDivElement>;

  // Ejemplo de un Input para recibir datos desde un componente Contenedor
  @Input() coordinates: { lat: number, lng: number, popup: string }[] = [];

  private mapInstance: L.Map | null = null;

  constructor(private mapProvider: MapProviderService) { }

  /**
   * Hook de ciclo de vida llamado después de que la vista se inicializa.
   * Es el momento ideal para interactuar con el DOM (pintar el mapa)
   */
  ngAfterViewInit(): void {
      if (this.mapElement) {
        const containerId = this.mapElement.nativeElement.id;

        const center = [4.7110, -74.0721];
        const zoom = 12;

        // 1. Inicializar el mapa usando el servicio
        this.mapInstance = this.mapProvider.initializeMap(containerId, center, zoom);

        // 2. Agregar marcadores recibidos por Input
        this.coordinates.forEach(coord => this.mapProvider.addMarker(coord.lat, coord.lng, coord.popup));
      }
  }

  ngOnDestroy(): void {
    if (this.mapInstance) {
      this.mapInstance.remove();
      this.mapInstance = null;
    }
  }



}
