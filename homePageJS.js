//sticky navigation bar
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


//Scrow animation for the boxes
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    window.addEventListener('scroll', checkBoxes);

    checkBoxes();

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    }
});


//animation for the FAQ
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box2');

    window.addEventListener('scroll', checkBoxes);

    checkBoxes();

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box2 => {
            const boxTop = box2.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box2.classList.add('show');
            } else {
                box2.classList.remove('show');
            }
        });
    }
});


const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});
