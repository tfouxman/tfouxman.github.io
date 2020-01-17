let anchorlinks = document.querySelectorAll('a[href^="#"]');
window.sr = ScrollReveal({reset: true});


// jQuery to wait for the document to load before starting typing and revealing animations
$(document).ready(function() {
    $("#typewriter").addClass("typewriter").removeClass("hidden");
    $(".load-hidden").removeClass("load-hidden");
    sr.reveal('.banner-image', {duration: 2500, scale: 0, reset: false});
});

for (let item of anchorlinks) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

let boxContainer = document.querySelectorAll('.boxes-intro');
let boxes = [];

for (var i = 0; i < boxContainer.length; i++) {
    allBoxes(boxContainer[i]);
}

let sides = ['top', 'bottom', 'left', 'right']

function allBoxes(node) {
    let sides = ['top', 'bottom', 'left', 'right']
    let count = 0;
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        allBoxes(child);
    }
    let minmax = [2, 4];
    
    if ((node.tagName == 'DIV' && !node.firstChild) && node.nodeType != Node.TEXT_NODE) {
        count++;
        let side = sides[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
        let config = {
            scale: 0.5,
            origin: side,
            distance: '5px'
        }
        let duration = 1000 * (Math.floor(Math.random() * (minmax[1] - minmax[0] + 1)) + minmax[0]);
        config.duration = duration;
        sr.reveal(node, config);
    }
}

let aboutItems = document.querySelectorAll('.about-container');
for (var i = 0; i < aboutItems.length; i++) {
    let side = sides[Math.floor(Math.random() * (i - 0 + 1)) + 0];
    let config = {
        scale: 0.5,
        origin: side,
        distance: '5px'
    }
    let duration = 1000 * (Math.floor(Math.random() * ((i/2) * 1.15 - 1 + 1)) + 1);
    config.duration = duration;
    sr.reveal(aboutItems[i], config);
    
}

sr.reveal('.intro', { duration: 1400, scale: 0.7, origin: 'top', distance: '50px' });