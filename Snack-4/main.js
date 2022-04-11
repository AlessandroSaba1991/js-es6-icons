/* 
Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const persone = [{
        nome: 'Alessandro',
        cognome: 'Saba',
        eta: 30,
    },
    {
        nome: 'Claudio',
        cognome: 'Sbirri',
        eta: 20,
    },
    {
        nome: 'Giulia',
        cognome: 'Stin',
        eta: 15,
    },
    {
        nome: 'Franca',
        cognome: 'Babba',
        eta: 17,
    },
    {
        nome: 'Gino',
        cognome: 'Pulcino',
        eta: 27,
    },
    {
        nome: 'Lorenzo',
        cognome: 'Breccola',
        eta: 18,
    }
]

const persone_2 = persone.map(persona => {
    if (persona.eta > 17) {
        return `${persona.cognome} ${persona.nome} ha ${persona.eta}, quindi può guidare`
    } else {
        return `${persona.cognome} ${persona.nome} ha ${persona.eta}, quindi non può guidare`
    }
})
console.log(persone_2);

stamp_list('.cards', persone_2)

function stamp_list(dom_element, array) {
    const element_cards = document.querySelector(dom_element)
    array.forEach(element => {
        const markup = `
      <div class="card" style="width: calc(100% - 2rem)">
          <h2>${element}</h2>
      </div>
      `
        element_cards.insertAdjacentHTML('beforeend', markup)
    });
}