const mobileNav = document.querySelector('#mobileNav');
const leftContent = document.querySelector('.left');
const rightContent = document.querySelector('.right');



mobileNav.addEventListener('click' , function() {
    leftContent.classList.toggle('onLeft');
    rightContent.classList.toggle('onRight');
})