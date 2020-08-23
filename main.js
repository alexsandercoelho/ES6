/*Classes 
class List {
  constructor(){
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }

}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = "Alexsander";
  }
  
  mostraUsuario() {
    console.log(this.usuario);
  }

}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();
*/
const usuario = {
  nome: 'fulano',
  idade: '33',
  empresa: 'uol'
 };
const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

