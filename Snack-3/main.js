/* 
Snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'pulcino', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cavallo', famiglia: 'equinidi', classe: 'mammiferi' },
    { nome: 'mosca', famiglia: 'insettinidi', classe: 'insetti' },
    { nome: 'zanzara', famiglia: 'insettinidi', classe: 'insetti' },
    { nome: 'zebra', famiglia: 'equinidi', classe: 'mammiferi' },
]

const mammiferi = animali.filter(mammifero => mammifero.classe === 'mammiferi')
console.log(mammiferi);