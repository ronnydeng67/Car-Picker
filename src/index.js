import { hpSlider, fuelSlider, budgetSlider, capacitySlider } from './scripts/slider.js';
// import { getValue } from './scripts/button.js'
// import { changeSliderValue } from './scripts/button.js';
const searchJson = require("./scripts/search.js");

hpSlider();
fuelSlider();
budgetSlider();
capacitySlider();
// changeSliderValue();
const submitButton = document.querySelector(".button")
submitButton.addEventListener("click", e => {
    e.preventDefault();
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

    let switchResult = function() {
        document.querySelector(".loading_page").style.display="block";
        document.querySelector(".main").style.display="none";
        setTimeout(function(){
            document.querySelector(".result").style.display="block";
            document.querySelector(".loading_page").style.display="none";
        }, 500)
    }
    switchResult();

        let userInput = {
            "hp": hp,
            "fuel": fuel,
            "price": budget,
            "capacity": capacity,
            "body": body,
            "transmission": trans,
            "awd": awd,
            "ev": ev
            }
            console.log(userInput);
    

    fetch("cars.json")
    .then(data => data.json())
    .then(data => {
        // debugger
        searchJson(userInput, data);
    })

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