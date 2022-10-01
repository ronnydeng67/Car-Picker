
function findCloseMatch(inputData, jsonData) {

    let result = [];

    for (let i = 0; i < jsonData.length; i ++) {
        let obj = jsonData[i]
        // console.log(obj)
        // console.log(inputData)
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
        console.log(spec)
        // debugger
    
        let number = spec.filter(value => value === true).length; // should return number (3)
        console.log(obj)
        console.log(number)
        obj["count"] = number
        result.push(obj); // not sure = obj would work, maybe try obj.model
                           // if it does, should have [{1: {carInfo..}}, {2: {carInfo}}]
        console.log(result)
        // should have sorted arr with count in descending order 
    }

    let sortedResult = result.sort(function(a, b) {
        b.count - a.count;
    })

    console.log(sortedResult)

    function hpRange(userValue, jsonHp) {
        
        let numHp = parseInt(jsonHp);
        let min = numHp - 30;
        let max = numHp + 30;
        let result = (userValue >= min && userValue <= max);

        return result;
    }

    function fuelRange(userValue, jsonHp) {
        
        let numHp = parseInt(jsonHp);
        let min = numHp - 2;
        let max = numHp + 2;

        let result = (userValue >= min && userValue <= max);
        
        return result;
    }

    function priceRange (userValue, jsonHp) {
        let numHp = parseInt(jsonHp);
        let min = numHp - 2;
        let max = numHp + 2;

        let result = (userValue >= min && userValue <= max);
        

        return result;
    }
}

module.exports = findCloseMatch;
