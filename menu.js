let show = true;

const menuSection = document.querySelector(".menu")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial" /* bloqueando a barra de rolagen quando o menu lateral tiver acionado*/
    menuSection.classList.toggle("on", show)
    show = !show;
})