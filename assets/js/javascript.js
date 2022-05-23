const header = document.querySelector('#header-index');
window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 150){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active-menu");
    navMenu.classList.toggle("active-menu");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove(active-menu);
    navMenu.classList.remove(active-menu);
}))
