const rangeInput = document.querySelector('.slider');
const priceDisplay = document.querySelector('.rangeValueDisplay');
const toggleSwitch = document.querySelector('.toggle-switch input');
const pageViewsDisplay = document.querySelector('.pricing-card-header > p');
const durationDisplay = document.querySelector('.duration');

const sliderValues = [0, 20, 40, 60, 80];
const planCost = [8, 12, 16, 24, 32]
const pageViews = ['10K', '50K', '100K', '500K', '1M'];



rangeInput.addEventListener('input', function() {
    // Update the progress bar background
    const rangeValue = this.value;
    rangeInput.style.background = `linear-gradient(to right, #A4F3EB ${rangeValue}%, #ddd ${rangeValue}%)`;

    for (let i = 0; i < sliderValues.length; i++) {
        if(rangeValue >= sliderValues[i]) {
            priceDisplay.innerText = `$${(toggleSwitch.checked ? planCost[i]*0.75 : planCost[i]).toFixed(2)}`;
            pageViewsDisplay.innerText = `${pageViews[i]} PAGEVIEWS`;
            durationDisplay.innerText = toggleSwitch.checked ? '/ year' : '/ month';
        }
    }
});

// On page load, set the progress bar background to initial value
rangeInput.style.background = `linear-gradient(to right, #A4F3EB ${rangeInput.value}%, #ddd ${rangeInput.value}%)`;

