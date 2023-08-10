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


    if (place === '' || checkin === '' || checkout === '' || guest === '' || priceRange === '') {
        alert('Please enter values before searching.');
        event.preventDefault();
        return;
    } else {

        // Create a string with the values
        let output = "<i class='fa-solid fa-magnifying-glass me-2 text-info'></i> Search: " + place + "<br><hr>" +
            "<i class='fa-regular fa-calendar me-2 text-info'></i>Check In: " + checkin + "<br><hr>" +
            "<i class='fa-regular fa-calendar me-2 text-info'></i>Check Out: " + checkout + "<br><hr>" +
            "<i class='fa-solid fa-users-line me-2 text-info'></i>Guests: " + guest + "<br><hr>" +
            "<i class='fa-solid fa-sliders me-2 text-info'></i>Price Range: " + priceRange + "<br>";

        // Display the values in the output div
        searchBox.classList.add("d-block");
        document.getElementById("outputDiv").innerHTML = output;
        event.preventDefault();

    }
});