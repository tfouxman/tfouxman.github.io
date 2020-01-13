let anchorlinks = document.querySelectorAll('a[href^="#"]');
window.sr = ScrollReveal({reset: true});


// jQuery to wait for the document to load before starting typing and revealing animations
$(document).ready(function() {
    $("#typewriter").addClass("typewriter").removeClass("hidden");
    sr.reveal('.banner-image', {duration: 3000, scale: 0});
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

let boxContainer = document.querySelectorAll('.boxes, .boxes-res');
let boxes = [];

for (var i = 0; i < boxContainer.length; i++) {
    allBoxes(boxContainer[i]);
}

function allBoxes(node) {  
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        allBoxes(child);
    }
    let minmax = [2, 4];
    let sides = ['top', 'bottom', 'left', 'right']
    if (node.tagName == 'DIV' && !node.firstChild) {
        let side = sides[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
        let config = {
            enter: 'bottom',
            wait: '0.5s',
            move: '20px',
            scale: 0.5,
            origin: side,
            distance: '5px'
        }
        let duration = 1000 * (Math.floor(Math.random() * (minmax[1] - minmax[0] + 1)) + minmax[0]);
        config.duration = duration;
        sr.reveal(node, config);
    }
}

sr.reveal('.intro', { duration: 2200, scale: 0.7 });
