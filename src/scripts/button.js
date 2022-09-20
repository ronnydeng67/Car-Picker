
const getValue = () => {
    let hp = document.getElementById("hp_range").value;
    let fuel = document.getElementById("fuel_range").value;
    let budget = document.getElementById("budget_range").value;
    let capacity = document.getElementById("capacity_range").value;

    let body = document.getElementById("car_body").value;
    let bodyStyle = body.options[selectElement.selectedIndex].value;

    let trans = document.getElementById("car_transmission").value;
    let transmission = trans.options[selectElement.selectedIndex].value;

    let awd = document.getElementById("awd").checked; // boolean
    let ev = document.getElementById("ev").checked; // boolean


    return [hp, fuel, budget, capacity, bodyStyle, transmission, awd, ev]
}



