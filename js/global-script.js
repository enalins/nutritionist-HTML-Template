//MENU TOGGLER
let topHeader = document.getElementById('topHeader'),
menuToggle = document.getElementById('menuToggle'),
closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
  topHeader.classList.add('mobileMenu');
  document.getElementsByTagName('body')[0].style.overflowY = "hidden";

  closeMenu.addEventListener('click', () => {
    topHeader.classList.remove('mobileMenu');
    document.getElementsByTagName('body')[0].style.overflowY = "scroll";
  })
})