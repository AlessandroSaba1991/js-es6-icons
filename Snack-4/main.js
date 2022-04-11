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
        eta: 21,
    },
    {
        nome: 'Lorenzo',
        cognome: 'Breccola',
        eta: 18,
    }
]

const persone_2 = persone.map(persona => {
    let text
    if (persona.eta > 17) {
        return text = `${persona.cognome} ${persona.nome} ha ${persona.eta}, quindi può guidare`
    } else {
        return text = `${persona.cognome} ${persona.nome} ha ${persona.eta}, quindi non può guidare`
    }
})
console.log(persone_2);