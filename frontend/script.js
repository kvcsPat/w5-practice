const beerCardComponent = function (title, sub, text) {
    return `
        <div class="cards">
            <h1 class="beerName">${title}</h1>
            <h2 class="beerCompany">${sub}</h2>
            <h3 class="beerType">${text}</h3>
        </div>
    `
}

// egy tömbünk van a data-ban, a cards - egy komponenst kell csinálnunk a script-ben, a beerCardComponent
// nem kell id-t adni, az id az unique, class nevet lehet
// a függvényünk paraméterei: name, company, type - bármilyen szó használható, csak következetesen használjuk
// kész az üres komponens, és várja a tartalmát - a template literalba
// a template literalba írt textnek egyezni kell a függvény paramétereiben megfogalmazott text - paraméter: title akkor template literal: ${title}

const beerTitleComponent = `<h1>Beers</h1>`;
//ha az insertAdjacentHTML-ben a második argument egy változó ( beerTitleComponent ) - akkor az argumentek: ("beforeend", beerTitleComponent) ez egy változó, nem pedig egy függvény

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    console.log(rootElement)

    console.log(beers.cards)
    // beers egy object, a beersen belül van a cards tömb - (key)cards: (value)tömb
    // végig kell iterálnunk a tömbön: tömb === for ciklus
    console.log(beers.logo) //(object)beers, azon belül (key)logo: (value)"Best Beers"

    //ha van adat a tömbben: for of ciklus, ha nincs: basic for ciklus

    for (const beer of beers.cards) {
        // for of (változó of object/elérési útvonal) - ebben az esetben a tömbünk elérési útvonala a beers objecten belül a cards tömbje
        // a változót mi hozzuk létre, lehet akármi, kiskutya is: const kiskutya of beer.cards - console.log(kiskutya)
        // a változó a tömbünk iterátora, ezentúl az iterátort használjuk
        /*
        ezzel a ciklussal végig lépkedek egy tömb elemein, ennek a tömbnek az elérési útvonala a beers nevű változó cards kulcsán lévő tömb
        és ezt a  folyamatot elnevezem, ez az elnevezés az iterátor
        később erre hivatkozom
        */
        console.log(beer)
        // a console megjeleníti a beers.cards tömbünket, mintha console.log(beers.cards) lenne
        console.log(beers.cards[0].title)
        // mindig a tömb 0. elemének a title-jét írja ki (Mango Bay)
        console.log(beer.title)
        // ezért hoztuk létre a beer iteratort, hogy a beers.cards-ban minden egyes elem title-jét kiírja
        // TEHÁT az insertAdjacentHTML második arugmentumában, a beerCardsComponent paraméterei: beer.title, beer.sub, beer.text
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text)) // két stringet kér argumentumként: position string és egy html kóddá konvertálható stringet.
        // a második argumentünk a beerCardComponent függvény lesz, aminek kell 3 paraméter - data.js: title, sub, text
        // a modern JS környezetben a html elementeket nem html-be írjuk, hanem komponensenként hozzáadjuk - sokkal könnyebb karban tartani, frissíteni stb
        // sokkal dinamikusabb és procedúrálisabb
        // könnyebb lekövetni a html kódban történő változásokat
    }
}

window.addEventListener("load", loadEvent)

/* 
js létrehoz egy window objektumot auotmatikusan, amit lát a böngésző
a loadEventListener egy eseményfigyelő, aminek a paraméterei - (esemény, függvény)
ez a sor minden egyes js fájl-ban benn kell, hogy legyen
ezen belül férünk hozzá a dokumentumunkhoz
*/

/* 
feladat:
egy újabb data.js (discord)
új repo-ba ugyanezt megcsinálni
*/