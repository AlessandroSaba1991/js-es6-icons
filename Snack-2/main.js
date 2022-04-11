/* 
Snack 2:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const nomi = ['alessandro', 'GIANFRANCO', 'ClAuDIO']

const nomi_capitalize = nomi.map(nome => {
    return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
})
stamp_list('.cards', nomi_capitalize)

function stamp_list(dom_element, array) {
    const element_cards = document.querySelector(dom_element)
    array.forEach(element => {
        const markup = `
      <div class="card" style="width: calc(100% - 2rem)")>
          <h2>${element}</h2>
      </div>
      `
        element_cards.insertAdjacentHTML('beforeend', markup)
    });
}
console.log(nomi_capitalize);