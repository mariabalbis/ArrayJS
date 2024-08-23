// Você tem uma lista de tarefas [ "Lavar a louça", "Estudar", "Fazer compras"]. Adicione uma nova tarefa ao final da lista e depois remova a primeira tarefa, já que foi completada. Por fim, verifique se "Estudar" ainda está na lista. 

let tarefas = ["Lavar a louça", "Estudar", "Fazer compras"]

tarefas.push("Trabalhar");
tarefas.splice(0,0,0);
tarefas.includes("Estudar");