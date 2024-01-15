function addTask () {
    var taskInput = document.getElementById("newTask");
    var taskList = document.getElementById('taskList');

    if(taskInput.value.trim() != ''){
        var newTask = document.createElement('li')
        newTask.className = 'group flex items-center justify-between p-2 border-b w-[400px]'
        newTask.innerHTML ="<span>" + taskInput.value.trim() + 
        "</span>" + "<button class='text-rose-500 hidden group-hover:block' onclick='removeTask(this)'>Excluir</button>"

        taskList.appendChild(newTask)
        taskInput.value = ''

        Toastify({
            text:"Tarefa criada",
            style: {
                background: 'Blue'
            }
        }).showToast()

    } else {
        Toastify({
            text:"Erro: Preencha seus dados!",
            style: {
                background: 'red'
            }
        }).showToast()
    }
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem)

    Toastify({
        text:"Tarefa completada",
        style: {
            background: 'green'
        }
    }).showToast()

}