
function twoCarsSearch(userData, jsonData) {
    
    if (userData.ev) {
        userData = jsonData.filter((car) => {
            car.ev
        })
    } else {
        userData = jsonData.reject((car) => {
            car.ev
        })
    }

    function searchResult() {

    }
}