import {
  __decorate,
  init_tslib_es6
} from "./chunk-ILX4OTJN.js";
import {
  Component,
  __esm,
  init_core
} from "./chunk-M6JVOVT6.js";

// angular:jit:template:src\app\features\dashboard\dashboard.component.html
var dashboard_component_default;
var init_dashboard_component = __esm({
  "angular:jit:template:src\\app\\features\\dashboard\\dashboard.component.html"() {
    dashboard_component_default = '<div>\r\n    <header class="sma-header border-bottom shadow-sm">\r\n        <div class="container d-flex align-items-center py-2">\r\n            <img src="/assets/img/IconoEmpresa.png" class="img-icono-empresa me-3" alt="Icono de Empresa">\r\n            <h2 class="m-0">SMA-IoT - Sistema de Monitoreo Ambiental</h2>\r\n        </div>\r\n    </header>\r\n\r\n    <main class="container py-4">\r\n        <div class="div-map">\r\n            <h2 class="mb-2">Mapa de Estaciones Ambientales</h2>\r\n            <map-viewer [stations]="stationData" />\r\n        </div>\r\n    </main>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\features\dashboard\dashboard.component.css
var dashboard_component_default2;
var init_dashboard_component2 = __esm({
  "angular:jit:style:src\\app\\features\\dashboard\\dashboard.component.css"() {
    dashboard_component_default2 = "/* src/app/features/dashboard/dashboard.component.css */\n.img-icono-empresa {\n  height: 100px;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n:host > div {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.div-map {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n";
  }
});

// src/app/features/dashboard/dashboard.component.ts
var DashboardComponent;
var init_dashboard_component3 = __esm({
  "src/app/features/dashboard/dashboard.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard_component();
    init_dashboard_component2();
    init_core();
    DashboardComponent = class DashboardComponent2 {
      // Mock con los datos de las estaciones. Para implementar más adelante, un StationDataService, el cual se conectará a AWS para obtener la información de las estaciones.
      stationData = [
        { id: "A001", nombre: "Estaci\xF3n Central", lat: 4.6097, lon: -74.0671, estado: "Activo" },
        { id: "A002", nombre: "Estaci\xF3n Norte", lat: 4.711, lon: -74.0721, estado: "Activo" },
        { id: "A003", nombre: "Estaci\xF3n Occidente", lat: 4.6738, lon: -74.12, estado: "Inactivo" }
      ];
    };
    DashboardComponent = __decorate([
      Component({
        selector: "dashboard",
        template: dashboard_component_default,
        styles: [dashboard_component_default2]
      })
      /**
       * Componente Contenedor. Gestiona los datos (lógica de negocio).
       * (ISO/IEC 25010 - Cohesiónn: Contiene la lógica y los datos de la Feature).
       */
    ], DashboardComponent);
  }
});

export {
  DashboardComponent,
  init_dashboard_component3 as init_dashboard_component
};
//# sourceMappingURL=chunk-E4Q7CBHF.js.map
