const { match } = require("core-js/fn/symbol");

for (let i = 0; i < DataTransfer.length; i ++) {
    let obj = data[i]
    let spec = [
        hpRange(inputData.hp, obj.hp),
        fuelRange(inputData.fuel, obj.fuel),
        priceRange(inputData.price, obj.price),
        (inputData.capacity == obj.capacity),
        (inputData.body === obj.body),
        (inputData.transmission === obj.transmission),
        (inputData.awd === obj.awd),
        (inputData.ev === obj.ev)
    ] // [true, true, false, false, true, false, true, false]

    let match = {};

    let count = spec.filter(value => value === true).length; // should return number (3)

    match[count] = obj // not sure = obj would work, maybe try obj.model
                       // if it does, should have {1: {carInfo..}, 2: {carInfo}}
}

// ----- possible solution for sorting the match object --------
// const obj = {z: 'three', a: 'one', b: 'two'};

// const sorted = Object.keys(obj)
//   .sort()
//   .reduce((accumulator, key) => {
//     accumulator[key] = obj[key];

//     return accumulator;
//   }, {});

// console.log(sorted); // 👉️ {a: 'one', b: 'two', z: 'three'}


// ------- assume we sorted ----------

res.push(match[0]) // => close match second car to compare with exact match
res.push(match[1]) // => optional second car if no car found

// then make another box for the second car... 
// fetch images for the second car 
// compare two cars infos