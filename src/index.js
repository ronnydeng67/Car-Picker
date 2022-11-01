import { hpSlider, fuelSlider, budgetSlider, capacitySlider } from './scripts/slider.js';
const searchJson = require("./scripts/search.js");

hpSlider();
fuelSlider();
budgetSlider();
capacitySlider();

const submitButton = document.querySelector(".button")
submitButton.addEventListener("click", e => {
    e.preventDefault();
    let hp = document.getElementById("hp_range").value;
    let fuel = document.getElementById("fuel_range").value;
    let budget = document.getElementById("budget_range").value;
    let capacity = document.getElementById("capacity_range").value;

    let body = document.getElementById("car_body").value;
    let trans = document.getElementById("car_transmission").value;
    let awd = document.getElementById("awd").checked; 
    let ev = document.getElementById("ev").checked;

    let switchResult = function() {
        document.querySelector(".loading_page").style.display="block";
        document.querySelector(".main").style.display="none";
        
        setTimeout(function(){
            document.querySelector(".result").style.display="block";
            document.querySelector(".loading_page").style.display="none";
        }, 1500)
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
    

    fetch("cars.json")
    .then(data => data.json())
    .then(data => {
        
        searchJson(userInput, data);

    })

});

    let hp1 = document.getElementById("hp_range")
    let fuel1 = document.getElementById("fuel_range")
    let budget1 = document.getElementById("budget_range")
    let capacity1 = document.getElementById("capacity_range")
    hp1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 50 + '%, blue '+ 0 + '%, yellow 100%)'
    fuel1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 50 + '%, blue '+ 0 + '%, yellow 100%)'
    budget1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 50 + '%, blue '+ 0 + '%, yellow 100%)'
    capacity1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 50+ '%, blue '+ 0 + '%, yellow 100%)'


const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function() {
    document.querySelector(".main").style.display="block";
    document.querySelector(".result").style.display="none";
})

// const aboutButton = document.querySelector(".aboutLink");

// aboutButton.addEventListener("click", e => {
//     if (document.querySelector(".aboutText").style.display === "none") {
//         document.querySelector(".aboutText").style.display="block"
//     } else {
//         document.querySelector(".aboutText").style.display="none"
//     }
// })

const modal = document.querySelector("#about-modal");
const btn = document.querySelector("#about-button");
const span = document.querySelector(".close-modal");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
