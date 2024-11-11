let hisob = 0;
const displey = document.getElementById('displey');
const kattaTugma = document.getElementById('kattaTugma');
const kichikTugma = document.getElementById('kichikTugma');

// Katta tugmani bosganda hisobni oshirish
kattaTugma.addEventListener('click', () => {
    hisob++;
    displey.innerText = hisob;
});

// Kichik tugmani bosganda hisobni 0 ga qaytarish
kichikTugma.addEventListener('click', () => {
    hisob = 0;
    displey.innerText = hisob;
});
