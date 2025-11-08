import {
  MapProviderService,
  init_map_provider_service
} from "./chunk-I4GCALAU.js";
import {
  TestBed,
  init_testing
} from "./chunk-M6JVOVT6.js";

// src/app/shared/services/map-provider.service.spec.ts
init_testing();
init_map_provider_service();
describe("MapProviderService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapProviderService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("deber\xEDa exponer un m\xE9todo para inicializar el mapa", () => {
    const mockMapContainer = document.createElement("div");
    mockMapContainer.id = "test-map-container";
    document.body.appendChild(mockMapContainer);
    const center = [4.711, -74.0721];
    const zoom = 12;
    const mapInstance = service.initializeMap("test-map-container", center, zoom);
    expect(mapInstance).not.toBeNull();
    service.removeMap();
    mockMapContainer.remove();
  });
});
//# sourceMappingURL=spec-map-provider.service.spec.js.map
