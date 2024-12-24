const artImages = document.querySelectorAll('.arts img'); 
const fullImgContainer = document.querySelector('.full-img');
const fullImg = document.querySelector('.full-img img');
const modal = document.querySelector('.modal');

artImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('showFullImg');
        fullImgContainer.classList.add('fillImgTransition');
        fullImg.src = img.src; 
    });
});

const button = document.querySelector('.modal button'); 
button.addEventListener('click', () => {
  modal.classList.remove('showFullImg');
  fullImgContainer.classList.remove('fillImgTransition');
});
