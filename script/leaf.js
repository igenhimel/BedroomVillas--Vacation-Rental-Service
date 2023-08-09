document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('map');
    const showMapBtn = document.getElementById('showMapBtn');
    var searchForm = document.getElementById('searchButton');
    var showListBtn;
    var propertyListVisible = false; 
    const arizonaCoordinates = [34.0489, -111.0937];

    let map = null;
    let markers = []; // Store markers to later toggle their visibility




    // Search functionality





    showMapBtn.addEventListener('click', function () {
        if (map === null) {
            map = L.map(mapContainer).setView(arizonaCoordinates, 7);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

       
    searchForm.addEventListener('click', function (e) {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput').value;
        const priceRangeInput = document.getElementById('priceInput').value;

        //geocoding service to fetch coordinates based on the search input

        const searchCoordinates = [35.0, -110.0];
        const [minPrice, maxPrice] = priceRangeInput.split('-').map(parseFloat);

        updateMapAndList(searchCoordinates, minPrice, maxPrice);
    });

    // Function to update the map and list based on search criteria
    function updateMapAndList(coordinates, minPrice, maxPrice) {
        // Clear previous markers
        markers.forEach(marker => marker.remove());

        // Clear property list container
        const propertyListContainer = document.getElementById('propertyListContainer');
        propertyListContainer.innerHTML = '';

        // properties
        const searchPropertyList = [{
                place: 'Arizona Lake Havasu City',
                coordinates: [35.1, -115.1],
                price: 1000
            },
            {
                place: 'The Nautical Sea Beach Resort',
                coordinates: [35.20, -110.2],
                price: 500
            },
            {
                place: 'Bluegreen Vaction',
                coordinates: [38.3, -110.3],
                price: 800
            },
        
        ];

        // Filter properties based on price range
        const filteredProperties = searchPropertyList.filter(property => property.price >= minPrice && property.price <= maxPrice);

        // Remove the previous "Show List" button if it exists
        if (showListBtn) {
            showListBtn.remove();
        }

        // Create a new "Show List" button on the map
        showListBtn = L.control({
            position: 'topright'
        });

        showListBtn.onAdd = function () {
            const div = L.DomUtil.create('div', 'show-list-button');
            div.innerHTML = '<button class="btn btn-dark text-light btn-sm">Show List</button>';
            div.firstChild.addEventListener('click', function () {
                propertyListVisible = !propertyListVisible;
                togglePropertyList(filteredProperties);
            });
            return div;
        };

        showListBtn.addTo(map);

        // Add filtered properties to the property list container and create markers
        filteredProperties.forEach(property => {
            // Add marker for the filtered property
            const marker = L.marker(property.coordinates).addTo(map);
            const popupContent = `<strong>${property.place}</strong><br>Price: $${property.price}`;
            marker.bindPopup(popupContent);
            marker.bindTooltip(popupContent).openTooltip();
            markers.push(marker);
        });
    }

    // Function to toggle property list visibility
    function togglePropertyList(properties) {
        const propertyListContainer = document.getElementById('propertyListContainer');
        propertyListContainer.innerHTML = '';

        if (propertyListVisible) {
            properties.forEach(property => {
                const propertyItem = document.createElement('div');
                propertyItem.innerHTML = `<strong>${property.place}</strong><br>Price: $${property.price}`;
                propertyListContainer.appendChild(propertyItem);
            });
        }
    }



        
      
         

        }
    });




});