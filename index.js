const MenuIcon = document.getElementById('menuicon');
const Navbardropdown = document.getElementById('menu-mobile');

MenuIcon.addEventListener('click', () => {
    if (Navbardropdown.classList.contains('hidden')) {
        Navbardropdown.classList.remove('hidden');
        MenuIcon.src = './assets/images/icon-menu-close.png';
    } else {
        Navbardropdown.classList.add('hidden');
        MenuIcon.src = './assets/images/icon-menu.png';
    }
});