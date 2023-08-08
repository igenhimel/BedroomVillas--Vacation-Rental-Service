//searching

const searchInput =document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');
const checkInInput = document.getElementById('check-in-input');
const checkOutInput = document.getElementById('check-out-input');
const searchButton = document.getElementById('searchButton');

fetch('places.json')
     .then(response=> response.json())
     .then(data => {
        const places =data;

        searchInput.addEventListener('input',function(){
            const inputValue = this.value.trim().toLowerCase();
            suggestionsList.innerHTML = '';

            if(inputValue.length >=3){
                const matchingPlace = places.filter(place =>place.toLowerCase().includes(inputValue));

                matchingPlace.forEach(place => {
                    const li = document.createElement('li');
                    li.className ='list-group-item';
                    li.innerHTML=`<i class="fa-solid fa-location-dot text-info me-2"></i>  ${place}`
            

                    li.addEventListener('click',function(){
                        searchInput.value = place;
                        suggestionsList.innerHTML= '';
                    });
                    suggestionsList.appendChild(li);
                });
            }
        });
    })
    .catch(error=>console.error('Error: ',error));

    //check in


    
    var picker = new Pikaday({
        field: document.getElementById('check-in-input'),
        toString(date, format) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${year}-${month<10 ? '0'+month : month}-${day<10 ? '0'+day : day}`;
        }
    });

    //check out


    var picker2 = new Pikaday({
        field: document.getElementById('check-out-input'),
        toString(date, format) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${year}-${month<10 ? '0'+month : month}-${day<10 ? '0'+day : day}`;
        }
    });


    //display all values

  searchButton.addEventListener('click',()=>{
   
        // Get the values from the input fields
        let place = document.getElementById("searchInput").value;
        let checkin = document.getElementById("check-in-input").value;
        let checkout = document.getElementById("check-out-input").value;
        let guest = document.getElementById("guestInput").value;
        let priceRange= document.getElementById("priceInput").value;
       
        // Create a string with the values
        let output = "Search: " + place + "<br>" +
                     "Check In: " + checkin + "<br>" + 
                     "Check Out: " + checkout + "<br>" + 
                     "Guests: " + guest + "<br>" + 
                     "Price Range: " + priceRange + "<br>";
        
        // Display the values in the output div
        document.getElementById("outputDiv").innerHTML = output;
        event.preventDefault();
  });