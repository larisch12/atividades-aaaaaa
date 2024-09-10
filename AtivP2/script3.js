let listaDeTarefas = []
let lista, elementoLista
function adicionarTarefa(){
    listaDeTarefas.push(document.getElementById
    ('id_tarefa').value)
   localStorage.tarefa = JSON.stringify(listaDeTarefas)
    alert("Tarefa adiciona com sucesso")
    lista = document.createElement('ol')
   for(let i = 0; i < listaDeTarefas.length; i++){
        alert(listaDeTarefas[i])
        elementoLista = document.createElement('li')
        elementoLista.innerText = listaDeTarefas[i]
        lista.append(elementoLista)
        btExcluir = document.createElement('button')
        btExcluir.setAttribute('id', 'bt' + i)
        btExcluir.innerText = 'excluir tarefa' + (i+1)
        btExcluir.setAttribute('onclik', 'excluirTarefa' ()
XAA        document.body.append(btExcluir)

   }
   document.body.append(lista)
}
