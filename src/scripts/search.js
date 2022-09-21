

function searchJson(userData, jsonData) {
    let inputData = userData;
    let data = jsonData;

    function findMatch() {

        let res = [];
        
        console.log(data);
        // debugger
        // data.forEach = (obj) => {
        //     if (
        //         hpRange(user.hp, obj.hp) &&
        //         fuelRange(user.fuel, obj.fuel) && 
        //         priceRange(user.price, obj.price) &&
        //         (user.capacity === obj.capacity) &&
        //         (user.trans === obj.transmission) &&
        //         (user.awd === obj.awd) &&
        //         (user.ev === obj.ev)
        //         ) 
        //     {
        //         res.push(obj);
        //     }
        // }
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            console.log(inputData.trans === obj.transmission);
            debugger
            if (
                hpRange(inputData.hp, obj.hp) &&
                fuelRange(inputData.fuel, obj.fuel) && 
                priceRange(inputData.price, obj.price) &&
                (inputData.capacity == obj.capacity) &&
                (inputData.trans === obj.transmission) &&
                (inputData.awd === obj.awd) &&
                (inputData.ev === obj.ev)
            ) {
                res.push(obj);
            }
        }
        console.log(res)
        return res;
    }


    function hpRange(userValue, jsonHp) {
        // debugger
        let numHp = parseInt(jsonHp);
        let min = numHp - 25;
        let max = numHp + 25;
        let result = (userValue >= min && userValue <= max);
        // console.log(min, max)
        // console.log(userValue)
        // console.log(result)
        return result;
    }

    function fuelRange(userValue, jsonHp) {
        // debugger
        let numHp = parseInt(jsonHp);
        let min = numHp - 2;
        let max = numHp + 2;

        let result = (userValue >= min && userValue <= max);
        // console.log(result)
        return result;
    }

    function priceRange (userValue, jsonHp) {
        let numHp = parseInt(jsonHp);
        let min = numHp - 2;
        let max = numHp + 2;

        let result = (userValue >= min && userValue <= max);
        // console.log(result)

        return result;
    }

    findMatch();
}

module.exports = searchJson;
