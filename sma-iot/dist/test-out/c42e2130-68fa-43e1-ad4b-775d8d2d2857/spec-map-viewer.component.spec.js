import {
  MapProviderService,
  init_map_provider_service
} from "./chunk-NXS7VCNZ.js";
import {
  Component,
  Input,
  TestBed,
  ViewChild,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-ZTV7NMFO.js";

// angular:jit:template:src\app\shared\components\map-viewer\map-viewer.component.html
var map_viewer_component_default;
var init_map_viewer_component = __esm({
  "angular:jit:template:src\\app\\shared\\components\\map-viewer\\map-viewer.component.html"() {
    map_viewer_component_default = '<div #mapElement class="map-viewer-container"></div>\r\n';
  }
});

// angular:jit:style:src\app\shared\components\map-viewer\map-viewer.component.css
var map_viewer_component_default2;
var init_map_viewer_component2 = __esm({
  "angular:jit:style:src\\app\\shared\\components\\map-viewer\\map-viewer.component.css"() {
    map_viewer_component_default2 = "/* src/app/shared/components/map-viewer/map-viewer.component.css */\n.map-viewer-container {\n  width: 100%;\n  height: 500px;\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=map-viewer.component.css.map */\n";
  }
});

// src/app/shared/components/map-viewer/map-viewer.component.ts
var MapViewerComponent;
var init_map_viewer_component3 = __esm({
  "src/app/shared/components/map-viewer/map-viewer.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_map_viewer_component();
    init_map_viewer_component2();
    init_core();
    init_map_provider_service();
    MapViewerComponent = class MapViewerComponent2 {
      mapProvider;
      mapElement;
      stations = [];
      constructor(mapProvider) {
        this.mapProvider = mapProvider;
      }
      ngAfterViewInit() {
        if (this.mapElement) {
          const containerId = "leaflet-map-" + Math.random().toString(36).substring(2, 9);
          this.mapElement.nativeElement.id = containerId;
          const center = [4.711, -74.0721];
          const zoom = 12;
          const mapInstance = this.mapProvider.initializeMap(containerId, center, zoom);
          if (mapInstance && this.stations.length) {
            this.mapProvider.addStationMarkers(mapInstance, this.stations);
          }
        }
      }
      ngOnDestroy() {
        this.mapProvider.removeMap();
      }
      static ctorParameters = () => [
        { type: MapProviderService }
      ];
      static propDecorators = {
        mapElement: [{ type: ViewChild, args: ["mapElement"] }],
        stations: [{ type: Input }]
      };
    };
    MapViewerComponent = __decorate([
      Component({
        selector: "map-viewer",
        template: map_viewer_component_default,
        styles: [map_viewer_component_default2]
      })
      /**
       *  Componente Presentacional (Puro) para la visualización del mapa.
       *  Recibe datos por Input y utiliza el servicio MapProviderService.
       *  (ISO/IEC 25010 - Reusabilidad)
       */
    ], MapViewerComponent);
  }
});

// src/app/shared/components/map-viewer/map-viewer.component.spec.ts
var require_map_viewer_component_spec = __commonJS({
  "src/app/shared/components/map-viewer/map-viewer.component.spec.ts"(exports) {
    init_testing();
    init_map_viewer_component3();
    describe("MapViewerComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [MapViewerComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(MapViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_map_viewer_component_spec();
//# sourceMappingURL=spec-map-viewer.component.spec.js.map
