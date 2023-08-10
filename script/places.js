const suggestionsList = document.getElementById('suggestions');


//searching
// Fetch the JSON data from places.json
fetch('places.json')
    .then(response => response.json())
    .then(data => {
        const places = data;

        searchInput.addEventListener('input', function () {
            const inputValue = this.value.trim().toLowerCase();
            suggestionsList.innerHTML = '';
            // Filter places based on the input value
            if (inputValue.length >= 3) {
                const matchingPlace = places.filter(place => place.toLowerCase().includes(inputValue));
                // Create a list item for each matching place
                matchingPlace.forEach(place => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item';
                    li.innerHTML = `<i class="fa-solid fa-location-dot text-info me-2"></i>  ${place}`


                    li.addEventListener('click', function () {
                        searchInput.value = place;
                        suggestionsList.innerHTML = '';
                    });
                    suggestionsList.appendChild(li);
                });
            }
        });
    })
    .catch(error => console.error('Error: ', error));