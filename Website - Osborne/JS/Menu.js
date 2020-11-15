const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuBtn.classList.add('open');
        menu.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menu.classList.remove('open');
        menuOpen = false;
    }
	
	
	$(document).ready(function) () {
		$(".menuBtn").click(function () {
			if 	($(".menu").height() == 1) {
				document.getElementById(".menu-links").style.opacity = 0;
			}
});