

export const hpSlider = () => {

    var output = document.getElementById("hp_value");
    var slider = document.getElementById("hp_range").oninput = function() {
        
        var value = (this.value - this.min) / (this.max - this.min) * 100;

        this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue '+ value + '%, yellow 100%)'
        
        output.innerHTML = this.value;

        }

}

export const fuelSlider = () => {

    var output = document.getElementById("fuel_value");
    var slider = document.getElementById("fuel_range").oninput = function() {
        
        var value = (this.value - this.min) / (this.max - this.min) * 100;

        this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue '+ value + '%, yellow 100%)'

        output.innerHTML = this.value;

        }

}

export const budgetSlider = () => {

    var output = document.getElementById("budget_value");
    var slider = document.getElementById("budget_range").oninput = function() {
        
        var value = (this.value - this.min) / (this.max - this.min) * 100;

        this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue '+ value + '%, yellow 100%)'

        output.innerHTML = this.value;

        }

}

export const capacitySlider = () => {

    var output = document.getElementById("capacity_value");
    var slider = document.getElementById("capacity_range").oninput = function() {
        
        var value = (this.value - this.min) / (this.max - this.min) * 100;

        this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue '+ value + '%, yellow 100%)'

        output.innerHTML = this.value;

        }

}