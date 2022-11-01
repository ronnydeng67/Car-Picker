var modal = document.getElementsByClassName("about-modal")[0];
var btn = document.getElementById("about-button");
var span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}