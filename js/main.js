/*const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px'
});*/

/* windowWidth = $(window).width();

$('.nav').mousemove(function(event) {
    var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
    var moveY = (($(window).height() / 2) - event.pageY) * 0.1;

    $('span').css('margin-left', moveX + 'px');
    $('span').css('margin-top', moveY + 'px');
});*/

/*document.addEventListener('click', () => {
    cursor.classList.add(".expand");

    setTimeout(() => {
        cursor.classList.remove(".expand");
    }, 500)
});*/


// NAV ELEMENT CIRCLE
document.onmousemove = function (e) {
    document.getElementById('element').style.transform = 'scale('+e.clientX*0.0009+')';
};


//Treca verzija
/*var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
    cursor.style.cssText = "left: "+e.clientX+"px; top: "+e.clientY+"px;";
});*/



//Prva Varijanta *********************
/*const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
});*/

// NAV BAR
const link = document.querySelectorAll('.nav > .hover_dot');
const cursor = document.querySelector('.cursor');

const spanAnimations = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 5;
    xMove = x / width * (move * 2) - move,
    yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
};

const editCoursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
};


link.forEach(b => b.addEventListener('mousemove', spanAnimations));
link.forEach(b => b.addEventListener('mouseleave', spanAnimations));
window.addEventListener('mousemove', editCoursor);



/* ####### Page Transition #########

const link = document.querySelector('.link');
const nav = document.querySelector('nav');
link.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.add('slide');
    setTimeout(() => {
        window.location = link.href;
    }, 900);
});*/

/* ####### Promena Strane ######### 
function appearAbout() {
    var hero = document.getElementsByClassName('.hero');
    var about = document.getElementsByClassName('.about');
    var portfolio = document.getElementById('portfolio');
    var contact = document.getElementById('contact');

    hero.style.left = '0';
    setTimeout(function() {
        hero.style.left = '-100%';
        about.style.display = 'none';
        portfolio.style.display = 'block';
        contact.style.display = 'block';
    }, 1000)
}

function appearPortfolio() {
    var hero = document.getElementsByClassName('.hero');
    var about = document.getElementById('about');
    var portfolio = document.getElementById('portfolio');
    var contact = document.getElementById('contact');

    hero.style.left = '0';
    setTimeout(function() {
        hero.style.left = '-100%';
        about.style.display = 'block';
        portfolio.style.display = 'none';
        contact.style.display = 'block';
    }, 1000)
}

function appearContact() {
    var hero = document.getElementsByClassName('.hero');
    var about = document.getElementById('about');
    var portfolio = document.getElementById('portfolio');
    var contact = document.getElementById('contact');

    hero.style.left = '0';
    setTimeout(function() {
        hero.style.left = '-100%';
        about.style.display = 'block';
        portfolio.style.display = 'block';
        contact.style.display = 'none';
    }, 1000)
}*/

