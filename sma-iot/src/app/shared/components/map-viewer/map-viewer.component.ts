import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnDestroy } from '@angular/core';
import { MapProviderService } from '../../services/map-provider.service';
import { Station } from '../../models/station.model';

@Component({
  selector: 'map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.css',
})

/**
 *  Componente Presentacional (Puro) para la visualización del mapa.
 *  Recibe datos por Input y utiliza el servicio MapProviderService.
 *  (ISO/IEC 25010 - Reusabilidad)
 */

export class MapViewerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapElement') mapElement!: ElementRef<HTMLDivElement>;

  // Input para recibir los datos de las estaciones (bajo acoplamiento)
  @Input() stations: Station[] = [];

  constructor(private mapProvider: MapProviderService) { }

  ngAfterViewInit(): void {
      if (this.mapElement) {
        const containerId = 'leaflet-map-' + Math.random().toString(36).substring(2, 9);
        this.mapElement.nativeElement.id = containerId;

        const center = [4.7110, -74.0721];
        const zoom = 12;

        const mapInstance = this.mapProvider.initializeMap(containerId, center, zoom);

        if (mapInstance && this.stations.length) {
          this.mapProvider.addStationMarkers(mapInstance, this.stations);
        }
      }
  }

  ngOnDestroy(): void {
    this.mapProvider.removeMap();    
  }
}
