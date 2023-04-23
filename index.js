const MAXROTATE = 45;
const MINROTATE = -45;

const MAXTRANSX = 15;
const MINTRANSX = -15;

const MAXTRANSY = 25;
const MINTRANSY = -25;

enhance = id => {
    var elem = document.getElementById(id);
    
    if(elem) {
        var word = elem.innerText;
        elem.innerHTML = '';
        elem.addEventListener("mouseenter", applyTransformations);

        for (const i in word) {
            var span = document.createElement('SPAN');

            span.setAttribute('class', 'letter');
            span.innerText = word[i];

            elem.append(span);
        }
    }
}

function applyTransformations() {
    this.querySelectorAll('span').forEach(letter => {
        setRandomValue(letter, '--rotateDeg', MINROTATE, MAXROTATE, 'deg');
        setRandomValue(letter, '--transformX', MAXTRANSX, MINTRANSX, 'px');
        setRandomValue(letter, '--transformY', MAXTRANSY, MINTRANSY, 'px');
    });
}

function setRandomValue(elem, property, min, max, unit) {
    elem.style.setProperty(property, (Math.floor(Math.random() * (max - min + 1)) + min) + unit);
}

enhance('github');
enhance('linkedin');