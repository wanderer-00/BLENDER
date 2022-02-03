// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷
const cluster = document.getElementById('cluster');
let hp = [];

function SSS(){
    if (1==1) { return 1 } else { return 0 };
};


const load = async () => {
    try {
        const res = await fetch('cfg.json');
        hp = await res.json();
        console.log(hp);
        //console.log("img = ", hp[5]['img']);
        displayCharacters(hp);
        n=n+1;
        console.log(n)
    } catch (err) {
        //console.error(err);
        console.log('ERROR');
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
        //
        function imageSpector(){
            if (character.img != undefined) { return `    <img src="IMGs/${character.img}">`} else { return '' };
        };

        function listSpector(){
            if (character.list != undefined) { 
            return`    <br><div>Пример:</div><br>
            <div class="code">${character.list.key}</div>
            <div class="note"> - ${character.list.note}</div>
            ` 
            } else { return '' };
        };

        return`
        <div class="box">
            <div class="code">${character.key}</div>
            <div class="note"> - ${character.note}</div>
        `
        + imageSpector() + "" + listSpector()
        + `</div>\n`
        ;
        }).join('');
    console.log(htmlString);
    cluster.innerHTML = htmlString;
};

load();