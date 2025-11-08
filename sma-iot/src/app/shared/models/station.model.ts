/**
 * Interface que modela la estructura de una estación de monitoreo.
 * (ISO/IEC 25010 - Analizabilidad / Reconocibilidad)
 * Define un contrato de datos claro para toda la aplicación.
 */
export interface Station {
    id: string;
    nombre: string;
    lat: number;
    lon: number;
    estado: 'Activo' | 'Inactivo';
}