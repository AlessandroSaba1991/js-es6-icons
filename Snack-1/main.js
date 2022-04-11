/* 
Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const automobili = [{
        marca: 'fiat',
        modello: '500',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'tipo',
        alimentazione: 'gpl'
    },
    {
        marca: 'citroen',
        modello: 'c2',
        alimentazione: 'elettrico'
    },
    {
        marca: 'citroen',
        modello: 'c4',
        alimentazione: 'diesel'
    },
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'diesel'
    },
    {
        marca: 'renault',
        modello: 'megane',
        alimentazione: 'benzina'
    },
    {
        marca: 'alfa romeo',
        modello: 'giulia',
        alimentazione: 'metano'
    },
    {
        marca: 'alfa romeo',
        modello: '147',
        alimentazione: 'benzina'
    },
    {
        marca: 'dacia',
        modello: 'koleos',
        alimentazione: 'elettrico'
    },
    {
        marca: 'renault',
        modello: 'capture',
        alimentazione: 'gpl'
    }
]

const auto_benzina = automobili.filter(auto => auto.alimentazione === 'benzina')
const auto_diesel = automobili.filter(auto => {
    return auto.alimentazione === 'diesel'
})
const auto_altro = automobili.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel')

stamp_list('.cards', auto_benzina)
stamp_list('.cards', auto_diesel)
stamp_list('.cards', auto_altro)

function stamp_list(dom_element, array) {
    const element_cards = document.querySelector(dom_element)
    array.forEach(element => {
        let markup
        switch (element.alimentazione) {
            case 'benzina':
                markup = `
                <div class="card" style="width: calc(100% / ${array.length} - 2rem);background-color: red")>
                    <h2>${element.marca}</h2>
                    <p>${element.modello}</p>
                    <p>${element.alimentazione}</p>
                </div>
                `
                break;
            case 'diesel':
                markup = `
                <div class="card" style="width: calc(100% / ${array.length} - 2rem);background-color: blue")>
                    <h2>${element.marca}</h2>
                    <p>${element.modello}</p>
                    <p>${element.alimentazione}</p>
                </div>
                `
                break;
            default:
                markup = `
                <div class="card" style="width: calc(100% / ${array.length} - 2rem);background-color: green")>
                    <h2>${element.marca}</h2>
                    <p>${element.modello}</p>
                    <p>${element.alimentazione}</p>
                </div>
                `
                break;
        }
        element_cards.insertAdjacentHTML('beforeend', markup)
    });
}
console.log(auto_benzina);
console.log(auto_diesel);
console.log(auto_altro);