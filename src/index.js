document.addEventListener("DOMContentLoaded", () => {
  
  let list = document.querySelectorAll('#list');
  console.log(list);

  let input = document.querySelector('#new-task-description')
  let taskForm = document.querySelector('#create-task-form');

  console.log(taskForm);
  taskForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let list = document.querySelector('#tasks')
      let listContent = document.createElement('li')
      listContent.innerText = input.value
      

      let handleDelete = document.createElement('button')
      handleDelete.innerText = 'delete'

      list.appendChild(listContent);
      listContent.appendChild(handleDelete);
      taskForm.reset()


      
      handleDelete.addEventListener('click', (e) => {
          listContent.remove();

      })


      
      taskForm.reset()
  })



});


