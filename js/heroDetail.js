let nameH = document.querySelector('.name')
let hp = document.querySelector('.span_hp')
let mana = document.querySelector('.span_mana')
let ms = document.querySelector('.span_ms')
let ats = document.querySelector('.span_ats')
let str = document.querySelector('.atb_str')
let agi = document.querySelector('.atb_agi')
let int = document.querySelector('.atb_int')
let img = document.querySelector('.heroAv')

nameH.innerHTML = localStorage.getItem('name')
hp.innerHTML = localStorage.getItem('hp')
mana.innerHTML = localStorage.getItem('mana')
ms.innerHTML = localStorage.getItem('ms')
ats.innerHTML = localStorage.getItem('ats')
str.innerHTML = localStorage.getItem('str')
agi.innerHTML = localStorage.getItem('agi')
int.innerHTML = localStorage.getItem('int')
console.log(localStorage.getItem('img'));
img.src = localStorage.getItem('img')