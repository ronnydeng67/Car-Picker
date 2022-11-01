

function renderInfo(car1, car2) {
    // console.log(carData);
    // debugger
    document.getElementByClassName("brand1").innerHTML = car1.brand;
    document.getElementByClassName("model1").innerHTML = car1.model;
    document.getElementByClassName("hp1").innerHTML = car1.hp;
    document.getElementByClassName("fuel1").innerHTML = car1.fuel;
    document.getElementByClassName("price1").innerHTML = car1.price;
    document.getElementByClassName("seats1").innerHTML = car1.capacity;

    document.getElementByClassName("brand2").innerHTML = car2.brand;
    document.getElementByClassName("model2").innerHTML = car2.model;
    document.getElementByClassName("hp2").innerHTML = car2.hp;
    document.getElementByClassName("fuel2").innerHTML = car2.fuel;
    document.getElementByClassName("price2").innerHTML = car2.price;
    document.getElementByClassName("seats2").innerHTML = car2.capacity;
}

module.exports = renderInfo;