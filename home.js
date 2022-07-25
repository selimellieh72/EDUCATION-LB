const toogleButton = document.getElementsByClassName('toogle-button')[0]
const navbar = document.querySelector('.site_header nav')
toogleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
