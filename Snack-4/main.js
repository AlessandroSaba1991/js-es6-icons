/* 
Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const persone = [{
        nome: "Alessandro",
        cognome: "Saba",
        eta: 30,
    },
    {
        nome: "Claudio",
        cognome: "Sbirri",
        eta: 20,
    },
    {
        nome: "Giulia",
        cognome: "Stin",
        eta: 15,
    },
    {
        nome: "Franca",
        cognome: "Babba",
        eta: 17,
    },
    {
        nome: "Gino",
        cognome: "Pulcino",
        eta: 27,
    },
    {
        nome: "Lorenzo",
        cognome: "Breccola",
        eta: 18,
    },
];

const persone_2 = persone.map((persona) => {
    let text, color
    if (persona.eta > 17) {
        text = 'può guidare'
        color = 'green'
        return mark_up(persona, color, text);
    } else {
        text = 'non può guidare'
        color = 'red'
        return mark_up(persona, color, text);
    }
});
console.log(persone_2);

stamp_list(".cards", persone_2);

/**
 * ###stampa una lista sul nodo della dom creato
 * @param {string} dom_element nodo della dom da creare e dove si vuole stampare la lista
 * @param {string} array lista da stampare
 */
function stamp_list(dom_element, array) {
    const element_cards = document.querySelector(dom_element);
    array.forEach((element) => {
        element_cards.insertAdjacentHTML("beforeend", element);
    });
}

/**
 * ### Genera il markup
 * @param {string} element array element
 * @param {string} color background color
 * @returns markup
 */
function mark_up(element, color, text) {
    const markup = `
                <div class="card" style="width: calc(100% - 2rem); background-color: ` + color + `">
                    <h2>${element.cognome} ${element.nome} ha ${element.eta}, quindi ${text}</h2>
                </div>
                `
    return markup;
}