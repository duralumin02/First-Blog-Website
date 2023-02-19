//hamburger
export const hamburger = () => {
  const navMenu = document.getElementById("nav-menu");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const menuBg = document.getElementById("menu-bg");
  hamburgerMenu.addEventListener("click", () => {
    console.log('click hamburger');
    hamburgerMenu.classList.toggle('change');
    menuBg.classList.toggle('change-bg');
    navMenu.classList.toggle('change');
  })
}


