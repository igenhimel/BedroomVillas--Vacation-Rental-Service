document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('map');
    const contentContainer = document.getElementById('contentContainer');
    const showMapBtn = document.getElementById('showMapBtn');
    var showListBtn;
    var propertyListVisible = false;
    const arizonaCoordinates = [40.7310749,-73.5169878];

    let map = null;
    let markers = []; // Store markers to later toggle their visibility

    showMapBtn.addEventListener('click', function () {
        contentContainer.className= 'd-none';
        
        if (map !== null) {

          
            mapContainer.className='d-block'

            map.remove(); // Remove the previous map
            map = null;
            markers = []; // Reset markers array
        }

        var searchInput = document.getElementById('searchInput').value;
        var priceRangeInput = document.getElementById('priceInput').value;

        // Function to update the map and list based on search criteria
        function updateMapAndList() {
            // Clear property list container
            const propertyListContainer = document.getElementById('propertyListContainer');
            propertyListContainer.innerHTML = '';

            const searchPropertyList = {
                'Hawa Mahal,USA': [
                    {
                        place: 'Peabody, MA, USA',
                        coordinates: [41.3948,-73.4540],
                        price: 150
                    },
                    {
                        place: 'Northampton, MA, USA',
                        coordinates: [41.4080,-75.6624],
                        price: 200
                    },
                    {
                        place: 'Newton, MA, USA',
                        coordinates: [40.6084,-75.4902],
                        price: 400
                    },
                    {
                        place: 'Newburyport, MA, USA',
                        coordinates: [41.6362,-70.9342],
                        price: 600
                    },
                    {
                        place: 'New Bedford, MA, USA',
                        coordinates: [39.2904,-76.6122],
                        price: 700
                    },
                    {
                        place: 'Medford, MA, USA',
                        coordinates: [40.2737,-76.8844],
                        price: 300
                    },
                    {
                        place: 'Malden, MA, USA',
                        coordinates: [40.2206,-74.7597],
                        price: 450
                    },
                    {
                        place: 'Leominster, MA, USA',
                        coordinates: [39.9537,-74.1979],
                        price: 350
                    },
                    // Add more properties for 'Hawa Mahal, USA'
                ],

                'Hawes,UK': [
                    {
                        place: 'Peabody, MA, UK',
                        coordinates: [41.3948,-73.4540],
                        price: 150
                    },
                    {
                        place: 'Northampton, MA, UK',
                        coordinates: [41.4080,-75.6624],
                        price: 200
                    },
                    {
                        place: 'Newton, MA, UK',
                        coordinates: [40.6084,-75.4902],
                        price: 400
                    },
                    {
                        place: 'Newburyport, MA, UK',
                        coordinates: [41.6362,-70.9342],
                        price: 600
                    },
                    {
                        place: 'New Bedford, MA, UK',
                        coordinates: [39.2904,-76.6122],
                        price: 700
                    },
                    {
                        place: 'Medford, MA, UK',
                        coordinates: [40.2737,-76.8844],
                        price: 300
                    },
                    {
                        place: 'Malden, MA, UK',
                        coordinates: [40.2206,-74.7597],
                        price: 450
                    },
                    {
                        place: 'Leominster, MA, UK',
                        coordinates: [39.9537,-74.1979],
                        price: 350
                    },
                    // Add more properties for 'Hawa Mahal, USA'
                ],
                // Add more locations here
            };




            // Get properties based on the search input
            const selectedLocationData = searchPropertyList[searchInput] || [];
            let filteredProperties = selectedLocationData;

            // Filter properties based on price range if a range is provided
            if (priceRangeInput) {
                const [minPrice, maxPrice] = priceRangeInput.split('-').map(parseFloat);
                filteredProperties = selectedLocationData.filter(property => property.price >= minPrice && property.price <= maxPrice);
            }


            const coordinatesData = [
                {
                    place: 'Hawa Mahal,USA',
                    coordinates: [41.3948,-73.4540]
                },
                {
                    place: 'Hawes,UK',
                    coordinates: [40.2206,-74.7597]
                },
                // Add more locations with coordinates
            ];
            
            // Filter out the coordinates based on the search input
            var filteredCoordinates = coordinatesData.filter(data => data.place === searchInput);
            var coordinatesArray;
            
            // Extract the coordinated value as an array

            if(filteredCoordinates.length>0){
               coordinatesArray  = filteredCoordinates[0].coordinates;
            }
            else{
                coordinatesArray = [40.2206,-74.7597];
            }

            

           

            // Create the map
            map = L.map(mapContainer).setView(coordinatesArray, 7);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Create a new "Show List" button on the map
            showListBtn = L.control({
                position: 'topright'
            });

            showListBtn.onAdd = function () {
                const div = L.DomUtil.create('div', 'show-list-button');
                div.innerHTML = '<button class="btn btn-dark text-light btn-sm rounded-pill"><i class="fa-solid fa-list"></i> Show List</button>';
                div.firstChild.addEventListener('click', function () {
                    propertyListVisible = !propertyListVisible;
                    togglePropertyList();
                });
                return div;
            };

            showListBtn.addTo(map);

            // Add filtered properties to the property list container and create markers
            filteredProperties.forEach(property => {

                const customIcon = L.divIcon({
                    className: 'custom-icon',
                    html: `<div class="custom-icon-content btn text-light btn-sm rounded-pill btn-dark">$${property.price}</div>`, // Replace property.customText with your custom text
                    iconSize: [40, 40], // Adjust the size as needed
                });
            
                // Add marker for the filtered property
                const marker = L.marker(property.coordinates,{icon: customIcon}).addTo(map);
        
               
            });
        }

        // Function to toggle property list visibility
        function togglePropertyList(properties) {
            contentContainer.className="container mt-4";
            mapContainer.className="d-none";
        }

        updateMapAndList();
    });
});
