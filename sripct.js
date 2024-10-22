const initSlider = () => {
    const imageList = document.querySelector(".container__slider-wrapper .slider-wrapper__image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper , .slide-button");
    
    slideButtons.forEach(button => {
        button.addEventListener("click" , () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}
window.addEventListener("load", initSlider);



// BOTAO DARK E LIGHTMODE 

let darkmode = localStorage.getItem('darkmode')
const trocarTema = document.getElementById('trocar-tema')

const eneableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") eneableDarkmode()

trocarTema.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? eneableDarkmode() : disableDarkmode()
})
