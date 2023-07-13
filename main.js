/**
 * light dark theme
 */
const themeBtn = document.getElementById('theme-btn');

themeBtn.onclick = function() {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')) {
        themeBtn.src = 'img/sun.png';
    }
    else {
        themeBtn.src = 'img/moon.png';
    }
}