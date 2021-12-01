window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nearlyexe'),
    menuItem = document.querySelectorAll('.nearlyexe_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nearlyexe_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nearlyexe_active');
        })
    })
})