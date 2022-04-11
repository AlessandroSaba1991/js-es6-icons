/* 
Snack 2:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const nomi = ['alessandro', 'GIANFRANCO', 'ClAuDIO']

const nomi_capitalize = nomi.map(nome => {
    return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
})

const element_cards = document.querySelector('.cards')
const markup = `<div class="card">${nomi_capitalize}</div>`
element_cards.insertAdjacentHTML('beforeend', markup)
console.log(nomi_capitalize);