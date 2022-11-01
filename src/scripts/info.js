

function renderInfo(car1, car2) {
    // debugger
    document.getElementById("brand1").innerHTML = car1.brand;
    document.getElementById("model1").innerHTML = car1.model;
    document.getElementById("hp1").innerHTML = car1.hp;
    document.getElementById("fuel1").innerHTML = car1.fuel;
    document.getElementById("price1").innerHTML = car1.price;
    document.getElementById("seats1").innerHTML = car1.capacity;

    document.getElementById("brand2").innerHTML = car2.brand;
    document.getElementById("model2").innerHTML = car2.model;
    document.getElementById("hp2").innerHTML = car2.hp;
    document.getElementById("fuel2").innerHTML = car2.fuel;
    document.getElementById("price2").innerHTML = car2.price;
    document.getElementById("seats2").innerHTML = car2.capacity;
}

module.exports = renderInfo;