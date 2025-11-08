import { TestBed } from '@angular/core/testing';
import { MapProviderService } from './map-provider.service';

describe('MapProviderService', () => {
  let service: MapProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // *** Prueba Clave para ISO 25010 / Testabilidad ***
  it('debería exponer un método para inicializar el mapa', () => {
    // Arrange: Simular el DOM para que Leaflet pueda funcionarr en un entorno de prueba
    const mockMapContainer = document.createElement('div');
    mockMapContainer.id = 'test-map-container';
    document.body.appendChild(mockMapContainer);
  
    // Act
    const center = [4.7110, -74.0721];
    const zoom = 12;
    const mapInstance = service.initializeMap('test-map-container', center, zoom);

    // Assert
    // Se verifica que la instancia del mapa no es nula, indicnado inicialización exitosa.
    expect(mapInstance).not.toBeNull();

    service.removeMap();
    mockMapContainer.remove();
  });
});

