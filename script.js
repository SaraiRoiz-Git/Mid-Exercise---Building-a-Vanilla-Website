

function checkInputValidety() {
    document.getElementById('contact-us').classList.add('form-submitted');
}

var bunner1 = { title: 'yellow click&pick', src: '/images/ez.jpg' };
var bunner2 = { title: 'שטחי מסחר פז סנטר', src: '/images/paz_250x110103131473.jpg' };
var bunner3 = { title: 'טיפז', src: '/images/tip.jpg' };
var bunnersList = [var1, var2, var3];
function changeBunner() {
    var title = document.querySelector('header-bunner');
    var image = document.querySelector('image-bunner');
    var currBunner;
    while (true) {
        setInterval(() => {
            currBunner = bunnersList.pop;
            title.innerHTML = currBunner.innerHTML;
            image.src = currBunner.src;
            bunnersList.push(changeBunner);
        }, 5000);
    }
}

changeBunner()

