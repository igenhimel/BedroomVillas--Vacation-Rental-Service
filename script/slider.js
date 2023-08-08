const slider = document.getElementById('slider');
const priceInput = document.getElementById('priceInput');
const sliderOpen = document.getElementById('sliderOpen');
const sliderApply = document.getElementById('sliderApply');
let minPrice = 0;
let maxPrice = 0;


priceInput.addEventListener('click', () => {
    sliderOpen.className = 'd-block';

    // Update minPrice and maxPrice based on slider values
    slider.noUiSlider.on('update', function (values) {
        minPrice = parseInt(values[0]);
        maxPrice = parseInt(values[1]);

    });
})

// Create the noUiSlider
noUiSlider.create(slider, {
    start: [0, 1000],
    connect: true,
    tooltips: [{
            to: value => `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${value.toFixed(2)}`
        },
        {
            to: value => `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${value.toFixed(2)}`
        }
    ],
    range: {
        min: 0,
        max: 1000
    }
});

// Function to update price input value
function updateValue() {
    priceInput.value = `${minPrice} - ${maxPrice}`;
}

sliderApply.addEventListener('click', () => {

    updateValue();
})

// Listen for clicks outside the slider to close it
document.addEventListener('click', function (event) {
    var elementsToExclude = ['input', 'textarea'];
    if (!sliderOpen.contains(event.target) && !elementsToExclude.includes(event.target.tagName.toLowerCase())) {
        sliderOpen.className = "d-none";
    }
});