let bannerTitles = document.querySelectorAll('.bannerTitle-block')

i = 0
setInterval(() => {
    setTimeout(() => {
        bannerTitles[i].style.opacity = '1'
    }, 500);    
    bannerTitles[i].style.opacity = '0'
    if (bannerTitles[i] == bannerTitles[bannerTitles.length - 1]) {
        i = 0
        return
    }
    i++
}, 3000);
