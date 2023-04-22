enhance = id => {
    var elem = document.getElementById(id);
    
    if(elem) {
        var word = elem.innerText;
        elem.innerHTML = '';

        for (const i in word) {
            var span = document.createElement('SPAN');

            span.setAttribute('class', 'letter');
            span.innerText = word[i];

            elem.append(span);
        }
    }
}

enhance('github');
enhance('linkedin');