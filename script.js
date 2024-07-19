let taskList;
onLoad();
function onLoad(){
  let taskListStr = localStorage.getItem('taskList');
  taskList = (taskListStr) ? JSON.parse(taskListStr) : [];
  display();
}

function display(){
  let element = document.querySelector('.tasks-show');
  let innerHTML = '';
  if(taskList.length === 0){
    element.innerHTML = '';
    return;
  }
  for(let i = 0; i < taskList.length; i++){
    innerHTML += `
      <div class="task-container">
        <div class="task-show">${taskList[i].task}</div>
        <div class="date-show">${taskList[i].dueDate}</div>
        <button class="remove" onclick="remove(${i})">REMOVE</button>
      </div>
    `;
  }
  element.innerHTML = innerHTML;
  document.querySelector('.task-input').value = '';
  document.querySelector('.date-input').value = '';
}

function add(){
  let taskToDo = document.querySelector('.task-input').value;
  let dateDue = document.querySelector('.date-input').value;
  if(taskToDo === "" && dateDue === ""){
    alert('Please enter the task and due date');
    return;
  }
  else if(dateDue === ""){
    alert('Please enter the due date');
    return;
  }
  else if(taskToDo === ""){
    alert('Please enter the task');
    return;
  }
  let ele = {
    task : taskToDo,
    dueDate : dateDue,
  }
  taskList.push(ele);
  localStorage.setItem('taskList',JSON.stringify(taskList));
  display();
}

function remove(idx){
  taskList.splice(idx,1);
  localStorage.setItem('taskList',JSON.stringify(taskList));
  display();
}