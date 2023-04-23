const MAXROTATE = 45;
const MINROTATE = -45;

const MAXTRANSX = 15;
const MINTRANSX = -15;

const MAXTRANSY = 25;
const MINTRANSY = -25;

const MAXFLOATY = -8;
const MINFLOATY = -3;

const MAXFLOATYDELAY = .8;
const MINFLOATYDELAY = 0;

enhance = id => {
    var elem = document.getElementById(id);
    
    if(elem) {
        var word = elem.innerText;
        elem.innerHTML = '';
        elem.addEventListener("mouseenter", applyTransformations);

        for (const i in word) {
            var outerSpan = document.createElement('SPAN');
            outerSpan.setAttribute('class', 'outer');

            var span = document.createElement('SPAN');
            span.setAttribute('class', 'letter');
            span.innerText = word[i];

            outerSpan.append(span);
            elem.append(outerSpan);
        }
    }
}

function applyTransformations() {
    this.querySelectorAll('.letter').forEach(letter => {
        setRandomValue(letter, '--rotateDeg', MINROTATE, MAXROTATE, 'deg');
        setRandomValue(letter, '--transformX', MAXTRANSX, MINTRANSX, 'px');
        setRandomValue(letter, '--transformY', MAXTRANSY, MINTRANSY, 'px');
    });

    this.querySelectorAll('.outer').forEach(letter => {
        setRandomValue(letter, '--floatY', MINFLOATY, MAXFLOATY, 'px', false);
        setRandomValue(letter, '--floatYDelay', MINFLOATYDELAY, MAXFLOATYDELAY, 's', false);
    });
}

function setRandomValue(elem, property, min, max, unit, floor = true) {
    var val = floor ? (Math.floor(Math.random() * (max - min + 1)) + min) : (Math.random() * (max - min + 1) + min);
    elem.style.setProperty(property, val + unit);
}

enhance('github');
enhance('linkedin');