    //guest
    const guestInput = document.getElementById('guestInput');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const counterValue = document.getElementById('counterValue');
    const counterOpen = document.getElementById('counterOpen')
    const counterApply = document.getElementById('counterApplyButton')
    

    let guestCount = 0;





    guestInput.addEventListener('click', () => {
      let slider = document.getElementById('sliderOpen');
      counterOpen.className = "d-block mt-3";
      slider.className="d-none";
    });


    //increase guest value
    increaseBtn.addEventListener('click', () => {
      guestCount++;
      updateGuestInput();
    });

    //decrease guest value
    decreaseBtn.addEventListener('click', () => {
      if (guestCount > 0) {
        guestCount--;
        updateGuestInput();


      }
    });

    counterApply.addEventListener('click', () => {
      updateInput();
      counterOpen.className = "d-none";
    });


    function updateInput() {
      guestInput.value = guestCount;
    }

    //update guest value on input field
    function updateGuestInput() {
      counterValue.innerText = guestCount;
    }

    document.addEventListener('click', function (event) {
      var elementsToExclude = ['input', 'textarea'];
      if (!counterOpen.contains(event.target) && !elementsToExclude.includes(event.target.tagName.toLowerCase())) {
        counterOpen.className = "d-none";
      }
    });