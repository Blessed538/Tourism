
const toggler =  document.querySelector('.nav-toggle');
const cancel =  document.querySelector('.cancel');
const links =  document.querySelector('.links')

toggler.addEventListener('click', () => {
    links.classList.toggle('show-links')
})


cancel.addEventListener('click', () => {
    links.classList.toggle('show-links')
})