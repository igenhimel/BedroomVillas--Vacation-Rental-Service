document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('map');
    const contentContainer = document.getElementById('contentContainer');
    const showMapBtn = document.getElementById('showMapBtn');
    var showListBtn;
    var propertyListVisible = false;


    let map = null;
    let markers = []; // Store markers to later toggle their visibility

    showMapBtn.addEventListener('click', function () {


        // Get the values from the input fields
        let place = document.getElementById("searchInput").value;
        let checkin = document.getElementById("check-in-input").value;
        let checkout = document.getElementById("check-out-input").value;
        let guest = document.getElementById("guestInput").value;
        let priceRange = document.getElementById("priceInput").value;


        if (place === '' || checkin === '' || checkout === '' || guest === '' || priceRange === '') {
            alert('Kindly provide all the necessary values to display the map');
            event.preventDefault();
            return;
        } else {

            contentContainer.className = 'd-none';

            if (map !== null) {


                mapContainer.className = 'd-block'

                map.remove(); // Remove the previous map
                map = null;
                markers = []; // Reset markers array
            }

            var searchInput = document.getElementById('searchInput').value;
            var priceRangeInput = document.getElementById('priceInput').value;

            // Function to update the map and list based on search criteria
            function updateMapAndList() {

                //center Coordinates

                const coordinatesData = [{
                    place: 'Hawa Mahal,USA',
                    coordinates: [41.3948, -73.4540]
                },
                {
                    place: 'Hawes,UK',
                    coordinates: [40.7608, -111.8910]
                },
                {
                    place: 'Hawthrone,CSA,USA',
                    coordinates: [32.7767, -96.7970]
                },
                {
                    place: 'Hawaii,USA',
                    coordinates: [32.7767, -96.7970]
                },
                {
                    place: 'Dhaka,Bangladesh',
                    coordinates: [23.8103, 90.4125]
                }
            ];


                // Clear property list container
                const propertyListContainer = document.getElementById('propertyListContainer');
                propertyListContainer.innerHTML = '';


                //sub-coordinates

                const searchPropertyList = {
                    'Hawa Mahal,USA': [{
                            place: 'Property 1',
                            coordinates: [41.3948, -73.4540],
                            price: 150
                        },
                        {
                            place: 'Property 2',
                            coordinates: [41.4080, -75.6624],
                            price: 200
                        },
                        {
                            place: 'Property 3',
                            coordinates: [40.6084, -75.4902],
                            price: 400
                        },
                        {
                            place: 'Property 4',
                            coordinates: [41.6362, -70.9342],
                            price: 600
                        },
                        {
                            place: 'Property 5',
                            coordinates: [39.2904, -76.6122],
                            price: 700
                        },
                        {
                            place: 'Property 6',
                            coordinates: [40.2737, -76.8844],
                            price: 300
                        },
                        {
                            place: 'Property 7',
                            coordinates: [40.2206, -74.7597],
                            price: 450
                        },
                        {
                            place: 'Property 8',
                            coordinates: [39.9537, -74.1979],
                            price: 350
                        },
                     
                    ],

                    'Hawes,UK': [{
                            place: 'Property 1',
                            coordinates: [40.7608, -111.8910],
                            price: 150
                        },
                        {
                            place: 'Property 2',
                            coordinates: [40.6461, -111.4980],
                            price: 200
                        },
                        {
                            place: 'Property 3',
                            coordinates: [40.8894, -111.8808],
                            price: 400
                        },
                        {
                            place: 'Property 4',
                            coordinates: [41.0415, -111.6782],
                            price: 600
                        },
                        {
                            place: 'Property 5',
                            coordinates: [40.5308, -112.2983],
                            price: 700
                        },
                        {
                            place: '6',
                            coordinates: [40.5071, -111.4138],
                            price: 300
                        },

                    ],

                    'Hawthrone,CSA,USA': [{
                            place: 'Property 1',
                            coordinates: [32.7767, -96.7970],
                            price: 150
                        },
                        {
                            place: 'Property 2',
                            coordinates: [32.3513, -95.3011],
                            price: 200
                        },
                        {
                            place: 'Property 3',
                            coordinates: [31.3382, -94.7292],
                            price: 400
                        },
                        {
                            place: 'Property 4',
                            coordinates: [31.4638, -100.4370],
                            price: 600
                        },
                        {
                            place: 'Property 5',
                            coordinates: [34.6035, -98.3959],
                            price: 700
                        },
                        {
                            place: 'Property 6',
                            coordinates: [35.4676, -97.5164],
                            price: 300
                        },

                    ],

                    'Hawaii,USA': [{
                            place: 'Property 1',
                            coordinates: [32.7767, -96.7970],
                            price: 150
                        },
                        {
                            place: 'Property 2',
                            coordinates: [32.3513, -95.3011],
                            price: 200
                        },
                        {
                            place: 'Property 3',
                            coordinates: [31.3382, -94.7292],
                            price: 400
                        },
                        {
                            place: 'Property 4',
                            coordinates: [31.4638, -100.4370],
                            price: 600
                        },
                        {
                            place: 'Property 5',
                            coordinates: [34.6035, -98.3959],
                            price: 700
                        },
                        {
                            place: 'Property 6',
                            coordinates: [35.4676, -97.5164],
                            price: 300
                        },

                    ],
                    'Dhaka,Bangladesh': [{
                        place: 'Property 1',
                        coordinates: [23.8103, 90.4125],
                        price: 150
                    },
                    {
                        place: 'Property 2',
                        coordinates: [24.3636, 88.6241],
                        price: 200
                    },
                    {
                        place: 'Property 3',
                        coordinates: [22.8456, 89.5403],
                        price: 400
                    },
                    {
                        place: 'Property 4',
                        coordinates: [22.3384, 91.8317],
                        price: 600
                    },
                    {
                        place: 'Property 5',
                        coordinates: [24.9036, 91.8687],
                        price: 700
                    },
                    {
                        place: 'Property 6',
                        coordinates: [23.4707, 91.1809],
                        price: 300
                    },

                ],

                };




                // Get properties based on the search input
                const selectedLocationData = searchPropertyList[searchInput] || [];
                let filteredProperties = selectedLocationData;

                // Filter properties based on price range if a range is provided
                if (priceRangeInput) {
                    const [minPrice, maxPrice] = priceRangeInput.split('-').map(parseFloat);
                    filteredProperties = selectedLocationData.filter(property => property.price >= minPrice && property.price <= maxPrice);
                }

                
                var filteredCoordinates = coordinatesData.filter(data => data.place === searchInput);
                var coordinatesArray;

                // Extract the coordinated value as an array

                if (filteredCoordinates.length > 0) {
                    coordinatesArray = filteredCoordinates[0].coordinates;
                } else {
                    coordinatesArray = [40.2206, -74.7597];
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
                    const marker = L.marker(property.coordinates, {
                        icon: customIcon
                    }).addTo(map);


                });
            }

            // Function to toggle property list visibility
            function togglePropertyList(properties) {
                contentContainer.className = "container mt-4";
                mapContainer.className = "d-none";
            }

            updateMapAndList();

        }



    });
});