// Sticky Na
menu.onclick = () => {
    navbar.clvbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 assList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    }