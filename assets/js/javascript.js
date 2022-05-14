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
