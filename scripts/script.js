
function changeImage(imagePath) {
    document.getElementById('profileImage').src = imagePath;
}

const carousel = new bootstrap.Carousel('#myCarousel')

/* PROJECT TESTING FOR NEXT UPDATE 
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');  
        }, index * 300);  
    });
});
*/
