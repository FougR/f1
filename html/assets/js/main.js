// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// MOBILE REMOVE MENU
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	// Quand on clique sur un lien, le menu part
	navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const header = document.getElementById('header')
    // Quand le scroll est plus grand que 50 viewport, on ajoute la classe scroll-header au header
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// READ SWIPER
let swiperRead = new Swiper(".read_container", {
    loop: true, 
    spaceBetween: 24, 
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
    },
});

// MIXITUP FILTER ANALYSE
let mixerAnalyse = mixitup('.analyse_content', {
    selectors: {
        target: ".analyse_card"
    },
    animation: {
        duration: 2000
    }
});

// Link active Analyse
const linkAnalyse = document.querySelectorAll('.analyse_item')

function activeAnalyse(){
    linkAnalyse.forEach(l=>l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}

linkFeatured.forEach(l=>l.addEventListener('click', activeFeatured))