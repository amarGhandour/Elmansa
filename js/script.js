
// const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');

let nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
   nav.forEach((navEl) => {
       navEl.classList.toggle('visible');
   })
});

let navWrapper = document.querySelector('.nav-wrapper');

window.addEventListener('scroll', fixedNav)

function fixedNav() {
    console.log(navWrapper.offsetHeight)
    if (window.scrollY > navWrapper.offsetHeight){
        navWrapper.classList.add('active')

    }else {
        navWrapper.classList.remove('active')

    }
}

// closeBtn.addEventListener('click', () => {
//     nav.forEach((navEl) => {
//         navEl.classList.remove('visible');
//     })
// });