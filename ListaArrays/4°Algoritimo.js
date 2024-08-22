/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let Tarefas = []

Tarefas [0] = prompt("Adicione a primeira tarefa")
Tarefas [1] = prompt("Adicione a segunda tarefa")
Tarefas [2] = prompt("Adicione a terceira tarefa")

Tarefas.splice(2, 2,);
Tarefas.push("ligar para o médico");

console.log (Tarefas) 

