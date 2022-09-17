const buttons = document.querySelector(".box3")

button.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carButton === "right" ? 1 : -1;
        const slides = button.closest(".car").querySelector(".slidesss");
        const activeSlide = slides.querySelector(".slide");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

module.exports = image;