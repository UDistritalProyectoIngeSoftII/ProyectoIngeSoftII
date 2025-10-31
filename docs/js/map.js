function initializeMap() {
    const map = L.map('mapContainer').setView([4.7110, -74.0721], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
}

try {
    initializeMap();
} catch (error) {
    console.error("Error inicializando el mapa:", error);
}
