
const IconeNav = document.querySelector(".IconeNav");
const BarraNav = document.querySelector(".BarraNav");

IconeNav.addEventListener('click', () => {
    // Alterna a classe 'expanded' no elemento sidebar
    BarraNav.classList.toggle('expandida');
});