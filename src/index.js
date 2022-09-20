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

    document.querySelector(".result").style.display="block";
    document.querySelector(".main").style.display="none";

    console.log([hp, fuel, budget, capacity, body, trans, awd, ev]); 
});

    let hp1 = document.getElementById("hp_range")
    let fuel1 = document.getElementById("fuel_range")
    let budget1 = document.getElementById("budget_range")
    let capacity1 = document.getElementById("capacity_range")
    hp1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 350 + '%, blue '+ 350 + '%, yellow 100%)'
    fuel1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 22 + '%, blue '+ 22 + '%, yellow 100%)'
    budget1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 35 + '%, blue '+ 35 + '%, yellow 100%)'
    capacity1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 5 + '%, blue '+ 5 + '%, yellow 100%)'


const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function() {
    document.querySelector(".main").style.display="block";
    document.querySelector(".result").style.display="none";
})