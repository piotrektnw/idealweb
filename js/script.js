const menuBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const date = document.querySelector('.date');
const sections = document.querySelectorAll('.section');
const allNavLinks = document.querySelectorAll('.nav-link, .fa-chevron-down');
const devDescription = document.querySelector('.dev-description');
const showMoreInfo = document.querySelectorAll('.show_content');
const allContents = document.querySelectorAll('.one, .two, .thr');
const infoHiders = document.querySelectorAll('.info_hide');
const contactForm = document.querySelector('#contactForm');
const nameAlert = document.querySelector('.name-alert');
const emailAlertTwo = document.querySelector('.email-alert-two');
const msgAlert = document.querySelector('.msg-alert');
const btnAlert =document.querySelector('.btn-alert');
const usernameInput = document.querySelector('#name');
const userEmailInput = document.querySelector('#email');
const userMsgInput = document.querySelector('#msg');
const tempFormSendBtn = document.querySelector('.temporary-button');
const formSendBtn = document.querySelector('.contact__form-btn');

const hide = () => {
    allContents.forEach(item => {
        item.classList.remove('show')
    })
}

const formBtnInfo = () => {
    btnAlert.classList.add('display')
}

const validateUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;
    const username = usernameInput.value.trim();

    if (username.length <= min || username.length > max ) {
        nameAlert.classList.add('display')
        usernameInput.classList.add('failure')
    } else {
        nameAlert.classList.remove('display')
        usernameInput.classList.remove('failure')
        usernameInput.classList.add('success')
        
        valid = true;   
    }
    return valid;
}

const validateEmail = () => {

    let valid = false;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = userEmailInput.value.trim();

    if (!email.match(mailformat)) {
        emailAlertTwo.classList.add('display')
        userEmailInput.classList.add('failure')
    } else {
        emailAlertTwo.classList.remove('display');
        userEmailInput.classList.remove('failure')
        userEmailInput.classList.add('success')
        valid = true;
    }

    return valid
}

const validateMessage = () => {
    let valid = false;
    const msg = userMsgInput.value.trim();

    if (msg.length <= 3) {
        msgAlert.classList.add('display')
        userMsgInput.classList.add('failure')
    } else {
        msgAlert.classList.remove('display');
        userMsgInput.classList.remove('failure')
        userMsgInput.classList.add('success')
        valid = true;
    }
    return valid
}

const whyUsDetailsDisplayer = (e) => {
    let text = e.target.textContent;
    let toDisplay = "." + text.slice(0, 3);

    let displayContent = document.querySelector(toDisplay);

    displayContent.classList.add("show")
}

const navBg = () => {
    this.scrollY > 100 ? nav.style.opacity = "1" : ""
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
window.addEventListener('scroll', navBg)


//entrance animation
setTimeout(() => {
    updateDevDescription();
}, 2500);

const changeColor = () => {
    formSendBtn.style.backgroundColor = "yellow"
}

// form validation
contactForm.addEventListener('input', function (e) {
    switch (e.target.id) {
        case "name":
            validateUsername();
            break;
        case "email": 
            validateEmail();
            break;
        case "msg":
            validateMessage();
            break;
        }

        if(validateUsername() && validateEmail() && validateMessage()) {
            formSendBtn.classList.remove('temporary-hide')
            tempFormSendBtn.classList.add('temporary-hide')
            btnAlert.classList.remove('display')
        }
})

tempFormSendBtn.addEventListener('click', formBtnInfo)

//handle why-us content
showMoreInfo.forEach((button) => {
    button.addEventListener('click', whyUsDetailsDisplayer)
})

infoHiders.forEach(item => {
    item.addEventListener('click', hide)
});

// current year in footer
currentDate();
