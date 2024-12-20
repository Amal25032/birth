let currentImageIndex = 1;
const images = document.querySelectorAll('.image-container img');

function blinkImages() {
    images.forEach(image => image.classList.remove('blink'));
    document.getElementById(`image${currentImageIndex}`).classList.add('blink');
    currentImageIndex = currentImageIndex === 1 ? 2 : 1;
    setTimeout(blinkImages, 1000);
}
