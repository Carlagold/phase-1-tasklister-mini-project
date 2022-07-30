document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const form = document.querySelector('#create-task-form')
// Issue when we click the submit botton the form triggers a refresh

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskValue = event.target['new-task-description'].value

// find the ul so we can append
const ul = document.querySelector('#task')
const li = document.createElement('li')

li.textContent = taskValue
ul.append(li)
})
});
