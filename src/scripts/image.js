// const searchJson = require("./search.js")

// function getImage() {

//     let accessKey = "nJQFxVnXFwVju-EBYAE1jndUUt1suJC9BMs1iPg_Zl8";
//     let endpoint = `https://api.unsplash.com/search/photos/page=1?query=${keyWord}client_id=${accessKey}&per_page=1`
//     let acutalImage = document.querySelector("#unsplash_imge");
//     let imageLink = document.querySelector("#image_link");

//     fetch(entpoint)
//         .then((response) => {
//             return response.json()
//         })
//         .then((unsplashImage) => {
//             acutalImage.src = unsplashImage.results.urls.small;
//         })
// }

// module.exports = getImage();