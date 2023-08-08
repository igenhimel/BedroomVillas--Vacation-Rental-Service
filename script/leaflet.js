document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('map');
    const showMapBtn = document.getElementById('showMapBtn');

    const arizonaCoordinates = [34.0489, -111.0937]; // Coordinates of Arizona

    let map = null;
    let markers = []; // Store markers to later toggle their visibility
    let propertyListVisible = false; // Track the visibility of the property list

    showMapBtn.addEventListener('click', function () {
        if (map === null) {
            map = L.map(mapContainer).setView(arizonaCoordinates, 7);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

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
                markers.push(marker); // Store markers
            });

            // Create a "Show List" button on the map
            const showListBtn = L.control({ position: 'topright' });

            showListBtn.onAdd = function () {
                const div = L.DomUtil.create('div', 'show-list-button');
                div.innerHTML = '<button class="btn btn-dark text-light btn-sm">Show List</button>';
                div.firstChild.addEventListener('click', function () {
                    propertyListVisible = !propertyListVisible;
                    togglePropertyList();
                });
                return div;
            };

            showListBtn.addTo(map);
        }
    });

    // Function to toggle the visibility of the property list
    function togglePropertyList() {
        markers.forEach(marker => {
            marker.setOpacity(propertyListVisible ? 0 : 1); // Toggle marker visibility
        });
        
        // Add property tiles to the property list container
        const propertyListContainer = document.getElementById('propertyListContainer');
        propertyListContainer.innerHTML = ''; // Clear previous content
        
        if (propertyListVisible) {
            const propertyList = [
                { place: 'Hawa', price: 1200 },
                { place: 'Paris', price: 500 }
                // Add more properties here
            ];
            
            propertyList.forEach(property => {
                const propertyTile = document.createElement('div');
                propertyTile.className = 'property-tile';
                propertyTile.innerHTML = `
                    <h4>${property.place}</h4>
                    <p>Price: $${property.price}</p>
                `;
                propertyListContainer.appendChild(propertyTile);
            });
        }
    }
});
