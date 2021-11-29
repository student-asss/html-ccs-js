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

// HEADER ON SCROLL
// document.addEventListener('scroll', function () {
//     const headerBar = document.querySelector('.headerBar');
//     const headerBarHeight = 100;

//     const distanceFormTop = Math.abs(
//         document.body.getBoundingClientRect().top
//     );
//     if (distanceFormTop >= headerBarHeight) headerBar.classList.add('fixed_top');
//     else headerBar.classList.remove('fixed_top');
// });

// NAV BAR
const link = document.querySelectorAll('.nav > .hover_dot');
const cursor = document.querySelector('.cursor');

const spanAnimations = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 9;
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

// SKILLS BAR 1
// const skillProgress = document.querySelector('.skillPercent');

// setTimeout(() => {
//     skillProgress.style.width = skillProgress.getAttribute('percent') + '%';
// }, 1000);

// SKILLS BAR
$('.skillPercent').each(function() {
    var $this = $(this);
    var percent = $this.attr('percent');
    $this.css('width', percent + '%');
    $({animatedValue: 0}).animate({animatedValue: percent},{
        duration: 2000,
        step: function(){
            $this.attr('percent', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
            $this.attr('percent', Math.floor(this.animatedValue) + '%');
        }
    });
});

// Toggle Body Scrolling
function toggleBodyScrolling() {
    document.body.classList.toggle('hide-scrolling');
}

// WORK BAR FILTER
const filterBtns = document.querySelector('.works-list');
let workingItems;

filterBtns.addEventListener('click', (e) => {
    if(e.target.classList.contains('work-btn') && !e.target.classList.contains('active')) {
        filterBtns.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        // toggleBodyScrolling();
        workFilterItems(e.target);
    }
});

function workFilterItems(workFilter) {
    const categoryFilter = workFilter.getAttribute('data-filter');
    document.querySelectorAll('.work-item').forEach((items) => {
        const category = items.getAttribute('data-category').split(',');
        
        if(category.indexOf(categoryFilter) !== -1 || categoryFilter === 'all'){
            items.classList.add('show');
        }else {
            items.classList.remove('show');
        }
    });
    workingItems = document.querySelectorAll('.work-item.show');
}
workFilterItems(document.querySelector('.work-btn.active'));


// WORK BAR DESCRIPTION
let workingItemsIndex;
document.addEventListener('click', (e) => {
    if(e.target.closest('.work-item')){
        const thatItem = e.target.closest('.work-item');
        workingItemsIndex = Array.from(workingItems).indexOf(thatItem);
        togglePopup();
        workDescriptions();
    }
});

function togglePopup() {
    document.querySelector('.work-popup').classList.toggle('open');
    toggleBodyScrolling();
}
document.querySelector('.popup-close-btn').addEventListener('click', togglePopup);

function workDescriptions() {
    document.querySelector('.popup-img img').src = workingItems[workingItemsIndex].querySelector('img').src;

    document.querySelector('.work-popup h3').innerHTML = workingItems[workingItemsIndex].querySelector('.work-item-title').innerHTML;

    document.querySelector('.popup-details p').innerHTML = workingItems[workingItemsIndex].querySelector('.work-item-details').innerHTML;

    document.querySelector('.popup-counter').innerHTML = `${workingItemsIndex + 1} of ${workingItems.length} ( <span title="category">${document.querySelector('.work-btn.active').innerHTML}</span> )`;
}
// SKILLS BAR 3
/*$(document).scroll(function (e) {
    var scrillAmount = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var roundScroll = Math.round(scrollPercent);

    $('.skillPercent').css('width', scrollPercent + '%');
    $('.skillPercent span').text(roundScroll);
});*/


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

