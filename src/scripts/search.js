const findCloseMatch = require("./closeMatch");
const renderInfo = require("./info.js");

function searchJson(userData, jsonData) {
    let inputData = userData;
    let data = jsonData;

    function findMatch() {

        let res = [];
        
        

        // for (let i = 0; i < data.length; i++) {
        //     let obj = data[i];

        //     if (
        //         hpRange(inputData.hp, obj.hp) &&
        //         fuelRange(inputData.fuel, obj.fuel) && 
        //         priceRange(inputData    .price, obj.price) &&
        //         (inputData.capacity == obj.capacity) &&
        //         (inputData.body === obj.body) &&
        //         (inputData.transmission === obj.transmission) &&
        //         (inputData.awd === obj.awd) &&
        //         (inputData.ev === obj.ev)
        //         ) {
        //         res.push(obj);
        //     }
        // }
        
        // if (res.length === 0) {
        //     document.getElementById("brand1").innerHTML = "Sorry, No cars found!!"
            
        // }


        // if (res.length < 2) {
            let closeMatchCar = findCloseMatch(inputData, data);
            console.log(closeMatchCar)
            res.push(closeMatchCar[0])
            document.getElementById("found_result").innerHTML = "Sorry, I can't find a exact match, but here is your close match:"
            // res.push(closeMatchCar[1])
        // } 
        // else {
        //     document.getElementById("found_result").innerHTML = "Your match woule be";
        // }
        // else if (res.length === 1) {
        //     let closeMatchCar = findCloseMatch(inputData, data);
        //     res.push(closeMatchCar[1])
        //     console.log(res)
        // } 
        
            
            document.getElementById("brand1").innerHTML = res[0].brand;
            document.getElementById("model1").innerHTML = res[0].model;

            let keyWord = res[0].brand + " " + res[0].model;
            // console.log(keyWord)
            let accessKey = "nJQFxVnXFwVju-EBYAE1jndUUt1suJC9BMs1iPg_Zl8";
            let endpoint = `https://api.unsplash.com/search/photos?query=${keyWord}&client_id=${accessKey}&per_page=3&orientation=landscape`
            let acutalImage = document.querySelector("#unsplash_imge1");
            let imageLink = document.querySelector("#image_link1");
            let acutalImage2 = document.querySelector("#unsplash_imge2");
            let imageLink2 = document.querySelector("#image_link2");
            let acutalImage3 = document.querySelector("#unsplash_imge3");
            let imageLink3 = document.querySelector("#image_link3");
    
            fetch(endpoint)
            .then((response) => {
                return response.json()
            })
            .then((unsplashImage) => {

                acutalImage.src = unsplashImage.results[0].urls.small;
                imageLink.setAttribute("href", unsplashImage.results[0].links.html);
                acutalImage2.src = unsplashImage.results[1].urls.small;
                imageLink2.setAttribute("href", unsplashImage.results[1].links.html);
                // acutalImage3.src = unsplashImage.results[2].urls.small;
                // imageLink3.setAttribute("href", unsplashImage.results[2].links.html);
            })

            renderInfo(res[0]);
        

        
    }


    function hpRange(userValue, jsonHp) {
        
        let numHp = parseInt(jsonHp);
        let min = numHp - 25;
        let max = numHp + 25;
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

    findMatch();
}

module.exports = searchJson;
