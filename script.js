

function checkInputValidety() {
    document.getElementById('contact-us').classList.add('form-submitted');
}

let bunner1 = { title: 'טיפז', src: 'images/tip.jpg' };
let bunner2 = { title: 'yellow click&pick', src: 'images/ez.jpg' };
let bunner3 = { title: 'שטחי מסחר פז סנטר', src: 'images/paz_250x110103131473.jpg' };
let bunnersList = [bunner1, bunner2, bunner3];
let counter = 0;

function changeBunner() {

    document.querySelector('#header-bunner').innerHTML = bunnersList[counter].title;
    document.querySelector('#image-bunner').src = bunnersList[counter].src;
    counter = (counter + 1) % bunnersList.length;
}

setInterval(changeBunner, 2000);
