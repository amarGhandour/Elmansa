//
// $(document).ready(function () {
//     nice scroll
//     $("#video-sidebar").niceScroll({
//         zindex: 9999
//     });
//
//     drop down
//     $('.dropdown-btn').click(function (){
//         $(this).siblings('div.dropdown-container').toggleClass('d-none')
//     });
// });

// navbar
const openBtn = document.querySelector('.open-btn');

let nav = document.querySelectorAll('.burger-nav');

openBtn.addEventListener('click', () => {
    nav.forEach((navEl) => {
        navEl.classList.toggle('visible');
    })
});

let navWrapper = document.querySelector('.nav-wrapper');

window.addEventListener('scroll', fixedNav)

function fixedNav() {
    console.log(navWrapper.offsetHeight)
    if (window.scrollY > navWrapper.offsetHeight) {
        navWrapper.classList.add('active')

    } else {
        navWrapper.classList.remove('active')

    }
}

// dropdown
let dorpdownBtn = document.querySelectorAll('.dropdown-btn');

dorpdownBtn.forEach((btn) => {
    btn.addEventListener('click', function (event) {
        this.nextElementSibling.classList.toggle('d-none');
    });
});


// video navigation mobile
let cardHeaders = document.querySelectorAll('.video-nav-mobile .card-header');

cardHeaders.forEach((btn) => [
    btn.addEventListener('click', function (event) {
        this.nextElementSibling.classList.toggle('d-none');
        this.querySelector('.fa-chevron-down').classList.toggle('up')
    })
])


