
function matchLists(car, input) {
    let matched = [];

    if (hpRange(input.hp, car.hp)) {
        matched.push('Horsepower');
    }
    if (fuelRange(input.fuel, car.fuel)) {
        matched.push("Fuel Economy");
    }
    if (priceRange(input.price, car.price)) {
        matched.push("Price");
    }
    if (input.capacity == car.capacity) {
        matched.push("Capacity");
    }
    if (input.body === car.body) {
        matched.push("Body Style");
    }
    if (input.transmission === car.transmission) {
        matched.push("Transmission");
    }
    if (input.awd == car.awd) {
        matched.push("Drivetrain")
    }

    return matched;

    function hpRange(userValue, jsonHp) {
        
        let numHp = parseInt(jsonHp);
        let min = numHp - 25;
        let max = numHp + 25;
        let result = (userValue >= min && userValue <= max);

        return result;
    }

    function fuelRange(userValue, jsonFuel) {
        
        let numFuel = parseInt(jsonFuel);
        let min = numFuel - 2;
        let max = numFuel + 2;

        let result = (userValue >= min && userValue <= max);
        
        return result;
    }

    function priceRange (userValue, jsonPrice) {
        let numPrice = parseInt(jsonPrice);
        let min = numPrice - 1;
        let max = numPrice + 1;

        let result = (userValue >= min && userValue <= max);
        

        return result;
    }
}

module.exports = matchLists;