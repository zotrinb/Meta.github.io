let Menu = document.querySelector('.burger__menu'); 
let MenuItems = document.querySelector('.header__nav');

Menu.addEventListener('click',() =>{
    MenuItems.classList.toggle('active');
    document.body.classList.toggle('locked');

});