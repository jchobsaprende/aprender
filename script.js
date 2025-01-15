// Selecionar elementos
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Função para adicionar uma tarefa
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // Criar um item da lista
  const li = document.createElement('li');
  li.textContent = taskText;

  // Botão para remover tarefa
  const removeButton = document.createElement('button');
  removeButton.textContent = 'DEL';
  removeButton.onclick = () => li.remove();

  li.appendChild(removeButton);
  taskList.appendChild(li);

  // Limpar o campo de entrada
  taskInput.value = '';
}

// Event listener
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
