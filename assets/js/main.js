//Menu hamburguer:
const hamburguer = document.getElementById('hamburguer-menu');
const menu = document.querySelector('#header-links .links-list');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    hamburguer.classList.toggle('opened');
});