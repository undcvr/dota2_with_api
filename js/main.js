// блоки с персами и поиск
fetch('../api/heroes.json')
.then((response) => response.json())
.then(function (json) {
    for (let i = 0; i < json.length; i++) {
        let heroBlock = document.createElement('div')
        heroBlock.classList.add('heroBlock')
        heroBlock.id = json[i].localized_name
        document.querySelector('.alertBlock').append(heroBlock)

        let img = document.createElement('img')
        if (json[i].img == 'nevermore') {
            img.src = `../media/aboba.jpg`
        } else {
            img.src = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${json[i].img}.png`
        }
        heroBlock.append(img)

        let h3 = document.createElement('h3')
        h3.classList.add('heroName')
        h3.innerText = json[i].localized_name
        heroBlock.append(h3)
    }


    let allHeroesBlocks = document.querySelectorAll('.heroBlock')
    document.querySelector('.search-input').addEventListener('input', function(event) {
        console.log(event.target);
        for (let i = 0; i < allHeroesBlocks.length; i++) {
            if (allHeroesBlocks[i].id.toLowerCase().includes(event.target.value.toLowerCase())) {
                allHeroesBlocks[i].style.display = 'flex'
            } else {
                allHeroesBlocks[i].style.display = 'none'
            }
            
        }

    })
});

// передаем данные на инфо страницу
document.querySelector('.alertBlock').addEventListener('click', function(e) {
    localStorage.setItem("name", e.target.id);

    fetch('../api//herostats.json')
    .then((response) => response.json())
    .then(function (json) {
        for (let i = 0; i < json.length; i++) {
            if (json[i].localized_name == e.target.id) {
                localStorage.setItem("name", json[i].localized_name);
                localStorage.setItem("hp", json[i].base_str * 20 + json[i].base_health);
                localStorage.setItem("mana", json[i].base_int * 20 + json[i].base_mana);
                localStorage.setItem("ms", json[i].move_speed);
                localStorage.setItem("ats", json[i].attack_rate);
                localStorage.setItem("str", json[i].base_str);
                localStorage.setItem("agi", json[i].base_agi);
                localStorage.setItem("int", json[i].base_int);
                localStorage.setItem("img", json[i].img);

                window.location.href = '../hero_detail.html'
            }
        }
});
})
