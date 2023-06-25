let show = true;

const menuContent = document.querySelector('.content');
const menuToglle = menuContent.querySelector('.menu-toggle');

menuToglle.addEventListener("click", ()=>{
  menuContent.classList.toggle('on', show);
  show = !show;
});