import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewerComponent } from './components/map-viewer/map-viewer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MapViewerComponent
  ],
  exports: [
    MapViewerComponent // Exportar para que otros módulos puedan usarlo
  ]
})
/**¨
 * Módulo para artefactos reusables (Componentes, Pipes, Directivas)
 * (ISO/IEC 25010 - Reusabilidad)
 */
export class SharedModule { }
