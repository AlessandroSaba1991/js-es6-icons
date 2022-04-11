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
const auto_diesel = automobili.filter(auto => auto.alimentazione === 'diesel')
const auto_altro = automobili.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel')

stamp_list('.cards', auto_benzina)
stamp_list('.cards', auto_diesel)
stamp_list('.cards', auto_altro)



/**
 * ###stampa una lista sul nodo della dom creato
 * @param {string} dom_element nodo della dom da creare e dove si vuole stampare la lista
 * @param {string} array lista da stampare
 */
function stamp_list(dom_element, array) {
    const element_cards = document.querySelector(dom_element)
    array.forEach(element => {
        let color
        switch (element.alimentazione) {
            case 'benzina':
                color = 'red'
                break;
            case 'diesel':
                color = 'blue'
                break;
            default:
                color = 'green'
                break;
        }
        const markup = mark_up(element, color, array)
        element_cards.insertAdjacentHTML('beforeend', markup)
    });
}


/**
 * ### Genera il markup 
 * @param {string} element array element
 * @param {string} color background color
 * @param {string} array array
 * @returns markup
 */
function mark_up(element, color, array) {
    const markup = `
                <div class="card" style="width: calc(100% / ${array.length} - 2rem);background-color:` + color + `")>
                    <h2>${element.marca}</h2>
                    <p>${element.modello}</p>
                    <p>${element.alimentazione}</p>
                </div>
                `
    return markup
}

console.log(auto_benzina);
console.log(auto_diesel);
console.log(auto_altro);