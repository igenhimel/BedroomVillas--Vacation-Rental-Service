//searching

const searchInput =document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');
const checkInInput = document.getElementById('check-in-input');
const checkOutInput = document.getElementById('check-out-input');


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
    });

    //check out


    var picker2 = new Pikaday({
        field: document.getElementById('check-out-input'),
    });


