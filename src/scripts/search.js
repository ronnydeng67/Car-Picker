

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
            // console.log(inputData.transmission === obj.transmission);
            // debugger
            if (
                hpRange(inputData.hp, obj.hp) &&
                fuelRange(inputData.fuel, obj.fuel) && 
                priceRange(inputData.price, obj.price) &&
                (inputData.capacity == obj.capacity) &&
                (inputData.body === obj.body) &&
                (inputData.transmission === obj.transmission) &&
                (inputData.awd === obj.awd) &&
                (inputData.ev === obj.ev)
            ) {
                res.push(obj);
            }
        }
        console.log(res)
        if (res.length === 0) {
            document.getElementById("brand1").innerHTML = "No cars found!!"
        } else {
            document.getElementById("brand1").innerHTML = res[0].brand;
            document.getElementById("model1").innerHTML = res[0].model;

            let keyWord = res[0].brand + " " + res[0].model;
            console.log(keyWord)
            debugger
            let accessKey = "nJQFxVnXFwVju-EBYAE1jndUUt1suJC9BMs1iPg_Zl8";
            let endpoint = `https://api.unsplash.com/search/photos?query=${keyWord}&client_id=${accessKey}&per_page=1`
            let acutalImage = document.querySelector("#unsplash_imge");
            let imageLink = document.querySelector("#image_link");
    
            fetch(endpoint)
            .then((response) => {
                return response.json()
            })
            .then((unsplashImage) => {
                console.log(unsplashImage.results[0].urls.small)
                    acutalImage.src = unsplashImage.results[0].urls.small;
            })
            // return res;
        }

        
    }


    function hpRange(userValue, jsonHp) {
        // debugger
        let numHp = parseInt(jsonHp);
        let min = numHp - 30;
        let max = numHp + 30;
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
module.exports = searchJson;
