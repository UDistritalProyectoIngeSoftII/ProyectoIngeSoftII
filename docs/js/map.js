
// Ver correctamento los iconos de leaflet
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

// 1. Datos de Simulación Estática (Mock)
// Se simulan 3 estaciones en el área de Bogotá
const estacionesSimuladas = [
    // Estación Central
    { id: 'A001', nombre: 'Estación Central', lat: 4.6097, lon: -74.0671, estado: 'Activo' },
    // Estación Norte
    { id: 'A002', nombre: 'Estación Norte', lat: 4.7110, lon: -74.0721, estado: 'Activo' },
    // Estación Occidente
    { id: 'A003', nombre: 'Estación Occidente', lat: 4.6738, lon: -74.1200, estado: 'Inactivo' }
];


function initializeMap() {

    // Coordenadas de Bogotá
    const BOGOTA_CENTER = [4.65, -74.07]; 
    const INITIAL_ZOOM = 12;

    const map = L.map('mapContainer').setView([4.7110, -74.0721], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Después de inicializar el mapa, agregamos los marcadores
    agregarMarcadores(map);
}

function agregarMarcadores(mapInstance) {
    if (!mapInstance) {
        console.error("El mapa no está inicializado. No se pueden añadir marcadores.");
        return;
    }

    estacionesSimuladas.forEach(estacion => {
        // 1. Crea el marcador
        const marker = L.marker([estacion.lat, estacion.lon]).addTo(mapInstance);

        // 2. Define el contenido del pop-up
        const popupContent = `
            <h6>${estacion.nombre} (ID: ${estacion.id})</h6>
            <p>Estado: <strong>${estacion.estado}</strong></p>
        `;

        // 3. Vincula el pop-up al marcador
        marker.bindPopup(popupContent);
    });

    console.log(`Se han agregado ${estacionesSimuladas.length} marcadores simulados al mapa.`);
}

try {
    initializeMap();
} catch (error) {
    console.error("Error inicializando el mapa:", error);
}
