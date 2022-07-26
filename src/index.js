document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("#create-task-form");
  const label = document.getElementsByName("#new-task-description");
  const input = document.getElementById("#new-task-priority");
  const ul = document.getElementById("tasks");
form.addEventListener("submit", (event) => {
  
  event.preventDefault();
  form.requestFullscreen();
})
  
});
