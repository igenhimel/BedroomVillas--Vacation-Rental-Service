document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('map');
    const showMapBtn = document.getElementById('showMapBtn');

    const arizonaCoordinates = [34.0489, -111.0937]; // Coordinates of Arizona

    let map = null;

    showMapBtn.addEventListener('click', function () {
        if (map === null) {
            map = L.map(mapContainer).setView(arizonaCoordinates, 7);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Sample hotel data with coordinates and prices (Replace with your data)
            const hotelData = [
                { name: 'Hawa, USA', coordinates: [34.5, -112.1], price: 150 },
                { name: 'Arizona, USA', coordinates: [33.8, -110.9], price: 200 },
                // Add more hotel data here
            ];

            // Loop through the hotel data and add markers to the map
            hotelData.forEach(hotel => {
                const marker = L.marker(hotel.coordinates).addTo(map);
                const popupContent = `<strong>${hotel.name}</strong><br>Price: $${hotel.price}`;
                marker.bindPopup(popupContent);
                marker.bindTooltip(popupContent).openTooltip();
            });
        }
    });
});
