let funnyTitle = document.querySelector('.logo-title')

funnyTitle.addEventListener('mouseover', function() {
    funnyTitle.innerHTML = 'Doka 3'
})
funnyTitle.addEventListener('mouseout', function () {
    funnyTitle.innerHTML = 'Dota 2'
})