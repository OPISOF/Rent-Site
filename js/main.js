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

function onLinkClick2(event){
  event.preventDefault();
  document.getElementById('complect').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function onLinkClick1(event){
  event.preventDefault();
  document.getElementById('des').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function onLinkClick3(event){
  event.preventDefault();
  document.getElementById('ch').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function onLinkClick4(event){
  event.preventDefault();
  document.getElementById('mark').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// let like = document.querySelector('#like')
// let good = document.querySelector('#good')

// function onClickLike(){
//     like.addEventListener('onclick', function(){
//         if (like.classList.contains('fa-regular')) {
//             like.classList.remove('fa-regular');
//             like.classList.add('fa-solid')
//         }
//         else{
//             like.classList.remove('fa-solid');
//             like.classList.add('fa-regular')
//         }
//     })
// }

let btn_to = document.querySelector('.btn-to');
let inp_rev = document.querySelector('.inp-rev');
let reviews = document.querySelector('.reviews')

function createReview(){
    let p_rev = document.createElement('p');
    p_rev.textContent = inp_rev.value;
    p_rev.classList.add('p-rev');
    reviews.append(p_rev);
    inp_rev.value = ''
}

btn_to.addEventListener('click', function(){
    createReview();
})



