
let images = document.querySelectorAll('.image');

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let imageContainer = document.querySelector('.image-countainer');

let totalImages = images.length;
let startIndex =0

function Sliding() {
    imageWidth = 100;
    moving = startIndex * imageWidth
    imageContainer.style.transform = `translateX(${-moving}%)`;
}



nextBtn.addEventListener('click', function () {
    if (startIndex < totalImages -1) {
        startIndex++;
    }
    else{
        startIndex = 0;
    }
    Sliding();
});


prevBtn.addEventListener('click', function () {

    if (startIndex > 0) {
        startIndex--;
    }
    else{
        startIndex = totalImages -1; 
    }
    Sliding();
});



