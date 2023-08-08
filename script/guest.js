    //guest
    const guestInput = document.getElementById('guestInput');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const counterValue = document.getElementById('counterValue');
    const counterOpen = document.getElementById('counterOpen')
    const counterApply = document.getElementById('counterApplyButton')

    let guestCount = 0;




    
    guestInput.addEventListener('click', () => {
        counterOpen.className="d-block mt-3"
      });


    increaseBtn.addEventListener('click', () => {
      guestCount++;
      updateGuestInput();
     

    });
  
    decreaseBtn.addEventListener('click', () => {
      if (guestCount > 0) {
        guestCount--;
        updateGuestInput();
     
    
      }
    });

    counterApply.addEventListener('click', () => {
     
      updateInput();
      counterOpen.className="d-none";
     
    
      });


    function updateInput(){

        guestInput.value=guestCount;
        
    }


    function updateGuestInput() {
      
        counterValue.innerText=guestCount;
        
      }

      document.addEventListener('click', function(event) {
        var elementsToExclude = ['input', 'textarea'];
        if (!counterOpen.contains(event.target) && !elementsToExclude.includes(event.target.tagName.toLowerCase())) {
          counterOpen.className="d-none";
        }
      });
      