const menuBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const date = document.querySelector('.date');
const sections = document.querySelectorAll('.section');
const allNavLinks = document.querySelectorAll('.nav-link');
const devDescription = document.querySelector('.dev-description');

const showMoreInfo = document.querySelectorAll('.more-info-one, .more-info-two, .more-info-three, .why-us__box')
const allContents = document.querySelectorAll('.one, .two, .thr')
const hiders = document.querySelectorAll('.hider')

const hide = () => {
    allContents.forEach(item => {
        item.classList.remove('show')
    })
}

const showContent = (e) => {
    let text = e.target.textContent;
    let toDisplay = "." + text.slice(0, 3);

    let displayContent = document.querySelector(toDisplay);

    displayContent.classList.add("show")
}


const hideNav = () => {
    nav.classList.remove('show-menu')
    menuBtn.classList.toggle('change-burger')
}

const handleNav = () => {
    nav.classList.toggle('show-menu')
    menuBtn.classList.toggle('change-burger')
}

const handleNavBtn = () => {
    const currentSection = window.scrollY;

    sections.forEach(section => {

        if (section.classList.contains('bright-section') && section.offsetTop <= currentSection + 10) {
            menuBtn.classList.add('black-menu-btn')
        } else if (!section.classList.contains('bright-section') && section.offsetTop <= currentSection + 10) {
            menuBtn.classList.remove('black-menu-btn')
        }
    })
}

const currentDate = () => {
    const year = (new Date).getFullYear();
    date.innerText = year;
}

let i = 0;

function updateDevDescription() {

    let adjectives = ['zarabiają', 'zwiększają ruch', 'interesują', 'przyciągają']



    setTimeout(function () {
        devDescription.textContent = adjectives[i];
        i++;

        if (i < adjectives.length) {
            updateDevDescription();
        }

    }, 600)
}


//handle navbar functions
menuBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleNavBtn);
allNavLinks.forEach(navLink => {
    navLink.addEventListener('click', hideNav)
});


//entrance animation
setTimeout(() => {
    updateDevDescription();
}, 2500);


//handle why-us content
showMoreInfo.forEach((button) => {
    button.addEventListener('click', showContent)
})

hiders.forEach(item => {
    item.addEventListener('click', hide)
});


// current year in footer 
currentDate();