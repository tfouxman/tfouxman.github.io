let anchorlinks = document.querySelectorAll('a[href^="#"]');
window.sr = ScrollReveal({reset: true});

for (let item of anchorlinks) { // relitere 
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
    if (node.tagName == 'DIV' && !node.firstChild) {
        let duration = Math.random() * 2000;
        sr.reveal(node, {duration: duration});
    }
}

sr.reveal('.intro', { duration: 1000 });