var search = () => {
    let data = data;
    let res = [];

    data.forEach = (obj) => {
        if (
            hpRange(user.hp, obj.hp) &&
            fuelRange(user.fuel, obj.fuel) && 
            priceRange(user.price, obj.price) &&
            (user.capacity === obj.capacity) &&
            (user.trans === obj.transmission) &&
            (user.awd === obj.awd) &&
            (user.ev === obj.ev)
            ) 
        {
            res.push(obj);
        }
    }
}

const hpRange = function(userValue, jsonHp) {
    let min = jsonHp - 25;
    let max = jsonHp + 25;

    return (userValue > min && userValue < max);
}

const fuelRange = function(userValue, jsonHp) {
    let min = jsonHp - 2;
    let max = jsonHp + 2;

    return (userValue > min && userValue < max);
}

const priceRange = function(userValue, jsonHp) {
    let min = jsonHp - 1;
    let max = jsonHp + 1;

    return (userValue > min && userValue < max);
}

