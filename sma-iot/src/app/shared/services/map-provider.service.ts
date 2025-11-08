import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Station } from '../models/station.model';

/**
 * Servicio que encapsula toda la lógica de la librería Leaflet (L).
 * Esto garantiza que la dependencia de Leaflet está aislada y facilita su reemplazo.
 * (ISO/IEC 25010 - Mantenibilidad/Modularidad)
 */

@Injectable({
  providedIn: 'root',
})
export class MapProviderService {
  private map: L.Map | null = null;

  constructor() {
    // 1. Configuración de Íconos.
    // Se ejecuta una sola vez al cargar el servicio (Singleton).
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });
   }

  /**
   * Inicializa el mapa en el contenedor HTML especificado.
   * @param containerId El ID del elemento div donde se dibujará el mapa.
   * @returns La instancia de L.Map.
   */
  public initializeMap(containerId: string, center: number[], zoom: number): L.Map | null {
    if (this.map) {
      this.map.remove(); // Evita la doble inicialización del mapa
    }

    try {
      this.map = L.map(containerId).setView([center[0], center[1]], zoom);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
  
      return this.map;
    } catch(error) {
      console.error('Error al inicializar el mapa con Leaflet:', error);
      return null;
    }

  }

  public addStationMarkers(mapInstance: L.Map, stations: Station[]): void {
    stations.forEach(estacion => {
        const popupContent = `
            <h6>${estacion.nombre} (ID: ${estacion.id})</h6>
            <p>Estado: <strong>${estacion.estado}</strong></p>
        `;

        L.marker([estacion.lat, estacion.lon]).addTo(mapInstance).bindPopup(popupContent);
    });
  }

  public removeMap(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }
  
}
