let stars = document.querySelectorAll('.star');
let clickCount = 0;

function changeColor(dataValue, color) {
    stars.forEach(element => {
        let elementValue = parseInt(element.getAttribute('data-item-value'));
        element.style.color = (elementValue <= dataValue) ? color : '';
    });
}

stars.forEach(star => {
    star.addEventListener('click', function() {
        clickCount++;
        let dataValue = parseInt(this.getAttribute('data-item-value'));
        changeColor(dataValue, (clickCount % 2 === 1) ? 'gold' : '');
    });
});









