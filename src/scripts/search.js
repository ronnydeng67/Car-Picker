const findCloseMatch = require("./closeMatch");
const renderInfo = require("./info.js");

function searchJson(userData, jsonData) {
    let inputData = userData;
    let data = jsonData;

    function findMatch() {

        let res = [];

        
        let closeMatchCar = findCloseMatch(inputData, data);
        console.log(closeMatchCar)
        
        if (inputData.ev) {
            closeMatchCar = closeMatchCar.filter(car => car.ev)
        }
        
        if (inputData.body !== "sedan") {
            closeMatchCar = closeMatchCar.filter(car => car.body === inputData.body)
        }
        res.push(closeMatchCar[0])
        res.push(closeMatchCar[1])
        document.getElementById("found_result").innerHTML = "Your closest matches are:"

        
            
        // document.getElementByClassName("brand1").innerHTML = res[0].brand;
        // document.getElementByClassName("model1").innerHTML = res[0].model;
        // document.getElementByClassName("hp1").innerHTML = res[0].hp;
        // document.getElementByClassName("fuel1").innerHTML = res[0].fuel;
        // document.getElementByClassName("seats1").innerHTML = res[0].capacity;

        let keyWord = res[0].brand + " " + res[0].model;
        let accessKey = "nJQFxVnXFwVju-EBYAE1jndUUt1suJC9BMs1iPg_Zl8";
        let endpoint = `https://api.unsplash.com/search/photos?query=${keyWord}&client_id=${accessKey}&per_page=3&orientation=landscape`
        let acutalImage = document.querySelector("#unsplash_imge1");
        let imageLink = document.querySelector("#image_link1");
        let acutalImage2 = document.querySelector("#unsplash_imge2");
        let imageLink2 = document.querySelector("#image_link2");

        fetch(endpoint)
        .then((response) => {
            return response.json()
        })
        .then((unsplashImage) => {

            acutalImage.src = unsplashImage.results[0].urls.small;
            imageLink.setAttribute("href", unsplashImage.results[0].links.html);
            acutalImage2.src = unsplashImage.results[1].urls.small;
            imageLink2.setAttribute("href", unsplashImage.results[1].links.html);
        })

        let keyWord1 = res[1].brand + " " + res[1].model;
        // let accessKey = "nJQFxVnXFwVju-EBYAE1jndUUt1suJC9BMs1iPg_Zl8";
        let endpoint2 = `https://api.unsplash.com/search/photos?query=${keyWord1}&client_id=${accessKey}&per_page=3&orientation=landscape`
        let acutalImage_2 = document.querySelector("#unsplash1_imge1");
        let imageLink_2 = document.querySelector("#image1_link1");
        let acutalImage2_2 = document.querySelector("#unsplash1_imge2");
        let imageLink2_2 = document.querySelector("#image1_link2");

        fetch(endpoint2)
        .then((response) => {
            return response.json()
        })
        .then((unsplashImage1) => {

            acutalImage_2.src = unsplashImage1.results[0].urls.small;
            imageLink_2.setAttribute("href", unsplashImage1.results[0].links.html);
            acutalImage2_2.src = unsplashImage1.results[1].urls.small;
            imageLink2_2.setAttribute("href", unsplashImage1.results[1].links.html);
        })


        const car1Link = document.querySelector("#explore-car1");
        const car2Link = document.querySelector("#explore-car2");

        car1Link.setAttribute("href", `https://www.edmunds.com/${res[0].brand}/${res[0].model}`)
        car2Link.setAttribute("href", `https://www.edmunds.com/${res[1].brand}/${res[1].model}`)
        renderInfo(res[0], res[1]);
        

        
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
