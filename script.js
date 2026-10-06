const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

};

window.addEventListener("scroll",()=>{

    navbar.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");

    menuIcon.classList.add("fa-bars");

});