import { Injectable } from '@angular/core';
import * as L from 'leaflet';

/**
 * Servicio que encapsula toda la lógica de la librería Leaflet (L).
 * Esto garantiza que la dependencia de Leaflet está aislada y facilita su reemplazo.
 * (ISO/IEC 25010 - Mantenibilidad/Modularidad)
 */

@Injectable({
  providedIn: 'root',
})
export class MapProvider {
  private map: L.Map | null = null;

  constructor() { }

  /**
   * Inicializa el mapa en el contenedor HTML especificado.
   * @param containerId El ID del elemento div donde se dibujará el mapa.
   * @returns La instancia de L.Map.
   */
  public initializeMap(containerId: string, center: number[], zoom: number): L.Map | null {
    if (this.map) {
      this.map.remove(); // Evita la doble inicialización del mapa
    }

    this.map = L.map(containerId).setView([center[0], center[1]], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    return this.map;
  }

  /**
   * Añade un marcador al mapa.
   * @param lat Latitud.
   * @param lng Longitud.
   * @param popupText Texto que aparece al hacer clic.
   */
  public addMarker(lat: number, lng: number, popupText: string): void {
    if (this.map) {
      L.marker([lat, lng])
        .addTo(this.map)
        .bindPopup(popupText);
    }
  }
}
