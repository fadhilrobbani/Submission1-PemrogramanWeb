let toggle = document.querySelector('.menu-toggle input');
toggle.addEventListener('click', function(){
    let nav = document.querySelector('nav ul');
    nav.classList.toggle('slide');
});