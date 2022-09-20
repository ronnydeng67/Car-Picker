import { hpSlider, fuelSlider, budgetSlider, capacitySlider } from './scripts/slider.js'
// import { getValue } from './scripts/button.js'
// import { changeSliderValue } from './scripts/button.js';

hpSlider();
fuelSlider();
budgetSlider();
capacitySlider();
// changeSliderValue();
const submitButton = document.querySelector(".button")
submitButton.addEventListener("click", e => {
    let hp = document.getElementById("hp_range").value;
    let fuel = document.getElementById("fuel_range").value;
    let budget = document.getElementById("budget_range").value;
    let capacity = document.getElementById("capacity_range").value;

    let body = document.getElementById("car_body").value;
    // let bodyStyle = body.options[select.selectedIndex].value;

    let trans = document.getElementById("car_transmission").value;
    // let transmission = trans.options[select.selectedIndex].value;

    let awd = document.getElementById("awd").checked; // boolean
    let ev = document.getElementById("ev").checked; // boolean


    console.log([hp, fuel, budget, capacity, body, trans, awd, ev]); 
});

