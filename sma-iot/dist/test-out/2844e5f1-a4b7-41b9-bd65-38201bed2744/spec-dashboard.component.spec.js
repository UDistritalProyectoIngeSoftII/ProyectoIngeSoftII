import {
  DashboardComponent,
  init_dashboard_component
} from "./chunk-WBX5QRD6.js";
import "./chunk-SMAND4KO.js";
import "./chunk-I4GCALAU.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-M6JVOVT6.js";

// src/app/features/dashboard/dashboard.component.spec.ts
var require_dashboard_component_spec = __commonJS({
  "src/app/features/dashboard/dashboard.component.spec.ts"(exports) {
    init_testing();
    init_dashboard_component();
    describe("Dashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DashboardComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_component_spec();
//# sourceMappingURL=spec-dashboard.component.spec.js.map
