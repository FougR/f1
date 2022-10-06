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

// MIXITUP FILTER ANALYSE
let mixerAnalyse = mixitup('.analyse_content', {
    selectors: {
        target: ".analyse_card"
    },
    animation: {
        duration: 300
    }
});

// Link active Analyse
const linkAnalyse = document.querySelectorAll('.analyse_item')

function activeAnalyse(){
    linkAnalyse.forEach(l=>l.classList.remove('active-analyse'))
    this.classList.add('active-analyse')
}

linkAnalyse.forEach(l=>l.addEventListener('click', activeAnalyse))

// CHOOSE DRIVER
const driver1 = document.getElementById('driver1')
const driver2 = document.getElementById('driver2')
const name1 = document.getElementById('name1')
const name2 = document.getElementById('name2')
var name1Content = ""
var name2Content = ""

function putDriver(driverName){
    if (name1Content == driverName){
        name1.innerHTML = "Pilote Numéro 1";
        name1Content = "";
        let img = document.getElementById("img1");
        driver1.removeChild(img);
        driver1.classList.remove("complete")
        return true
    }

    if (name2Content == driverName){
        name2.innerHTML = "Pilote Numéro 2";
        name2Content = "";
        let img = document.getElementById("img2");
        driver2.removeChild(img);
        driver2.classList.remove("complete");
        return true
    }

    if (driver1.classList.length == 1){
        name1Content = driverName;
        driver1.classList.add("complete");
        let img = document.createElement("img");
        img.src = `assets/img/${driverName}.png`;
        img.classList.add("analyse_img");
        img.id = "img1"
        name1.innerHTML = driverName;
        document.getElementById('input1').setAttribute('value', driverName)
        driver1.appendChild(img);
        return true
    }

    if (driver1.classList.length == 2 && driver2.classList.length == 1){
        name2Content = driverName;
        driver2.classList.add("complete");
        let img = document.createElement("img");
        img.src = `assets/img/${driverName}.png`;
        img.classList.add("analyse_img");
        img.id = "img2";
        name2.innerHTML = driverName;
        document.getElementById('input2').setAttribute('value', driverName)
        driver2.appendChild(img)
        return true
    }
}