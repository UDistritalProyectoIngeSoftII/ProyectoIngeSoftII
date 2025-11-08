import {
  MapViewerComponent,
  init_map_viewer_component
} from "./chunk-SMAND4KO.js";
import "./chunk-I4GCALAU.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-M6JVOVT6.js";

// src/app/shared/components/map-viewer/map-viewer.component.spec.ts
var require_map_viewer_component_spec = __commonJS({
  "src/app/shared/components/map-viewer/map-viewer.component.spec.ts"(exports) {
    init_testing();
    init_map_viewer_component();
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
