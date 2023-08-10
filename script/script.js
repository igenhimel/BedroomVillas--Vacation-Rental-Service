const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchBox = document.getElementById('searchBox');
//display all values

searchButton.addEventListener('click', () => {

    // Get the values from the input fields
    let place = document.getElementById("searchInput").value;
    let checkin = document.getElementById("check-in-input").value;
    let checkout = document.getElementById("check-out-input").value;
    let guest = document.getElementById("guestInput").value;
    let priceRange = document.getElementById("priceInput").value;


    if (place === '' && checkin === '' && checkout === '' && guest === '' && priceRange === '') {
        alert('Please enter values before searching.');
        event.preventDefault();
        return;
    } else {

        // Create a string with the values
        let output = "Search: " + place + "<br>" +
            "Check In: " + checkin + "<br>" +
            "Check Out: " + checkout + "<br>" +
            "Guests: " + guest + "<br>" +
            "Price Range: " + priceRange + "<br>";

        // Display the values in the output div
        searchBox.classList.add("d-block");
        document.getElementById("outputDiv").innerHTML = output;
        event.preventDefault();

    }
});