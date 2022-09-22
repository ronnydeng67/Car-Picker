

function renderInfo(carData) {
    // console.log(carData);
    // debugger
    document.getElementById("car_brand").innerHTML = carData.brand;
    document.getElementById("car_model").innerHTML = carData.model;
    document.getElementById("car_hp").innerHTML = carData.hp;
    document.getElementById("car_fuel").innerHTML = carData.fuel;
    document.getElementById("car_price").innerHTML = carData.price;
    document.getElementById("car_seat").innerHTML = carData.capacity;
}

module.exports = renderInfo;