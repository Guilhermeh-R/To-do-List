
const localStorageKey = 'to-do-list';

let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]');

//cria uma nova task
function newTask() {
    let conteudo = document.getElementById('input-task');

    //verifica se ha algo no input
    if (!conteudo.value) {
        alert('Digite algo');
        conteudo.style.borderColor = 'red';
    } else {
        values.push(
        {
            id: values.length + 1,
            content: conteudo.value
        });

        localStorage.setItem(localStorageKey, JSON.stringify(values));


    }
}

console.log('Tarefas adicionadas:', values);

//mostra as tasks na tela do usuario
function showTask()
{
    const tasklist = document.querySelector('#mostra-task');
    //add no html 
    values.forEach(item => {
        const task = document.createElement('li');
        
        task.innerHTML=` ${item.content} <button  type="submit" onclick="deletTask(${item.id})" id="bnt-confirm-task" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
      </svg></button>`;
      tasklist.appendChild(task);
    });
}
//Task concluida
function deletTask(id)
{   
    //filtra a task e devolve para a variavel o que for diferente do id
    values  = values.filter(task=> task.id !== id)
    //atualiza o localstorage
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    //recarrega as paginas
    location.reload()

}
showTask();