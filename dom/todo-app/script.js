//get form, input, list values
let formEle = document.querySelector("#form_container");
let inputEle = document.querySelector("#input_add_task");
let listEle = document.querySelector("#task_data");

let keys = Object.keys(localStorage);
if (keys) {
  for (let key of keys) {
    createNewTask(localStorage.getItem(key));
  }
}

function createNewTask(task) {
  //create tasks element
  let taskEle = document.createElement("div");
  taskEle.classList.add("tasks");

  //create a  checkbox
  let taskCheckBoxEle = document.createElement("input");
  taskCheckBoxEle.setAttribute("type", "checkbox");

  taskEle.append(taskCheckBoxEle);

  //create task content Element
  let taskContentEle = document.createElement("div");
  taskContentEle.classList.add("content");
  // taskContentEle.innerText = "task";
  //append task content into task element
  taskEle.appendChild(taskContentEle);

  //create input element
  let taskInputEle = document.createElement("input");
  taskInputEle.setAttribute("type", "text");
  taskInputEle.setAttribute("value", task);
  // taskInputEle.type = "text";
  // taskInputEle.value = "A new Task"
  taskInputEle.setAttribute("readonly", "readonly");
  console.log(taskInputEle);
  //append task input into task content element
  taskContentEle.appendChild(taskInputEle);

  //create task action element
  let taskActionEle = document.createElement("div");
  taskActionEle.classList.add("actions");
  //append task action into task ele
  taskEle.appendChild(taskActionEle);
  //create a edit button element
  let taskEditBtn = document.createElement("button");
  taskEditBtn.classList.add("edit");
  taskEditBtn.innerText = "edit";
  //create a delete buttton element
  let taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.classList.add("delete");
  taskDeleteBtn.innerText = "delete";
  //append edit and edit into task action element
  taskActionEle.appendChild(taskEditBtn);
  taskActionEle.appendChild(taskDeleteBtn);

  //append task element into list element
  listEle.appendChild(taskEle);

  inputEle.value = "";

  taskEditBtn.addEventListener("click", (e) => {
    let localValue;

    for (let key of keys) {
      if (localStorage.getItem(key) === taskInputEle.value) {
        console.log(key);
        localValue = key;
      }
    }

    if (taskEditBtn.innerText.toLowerCase() == "edit") {
      taskEditBtn.innerText = "Save";
      taskInputEle.removeAttribute("readonly");
      taskInputEle.focus();
    } else {
      console.log(localValue);
      taskEditBtn.innerText = "Edit";
      taskInputEle.setAttribute("readonly", "readonly");
      localStorage.setItem(`${localValue}`, taskInputEle.value);
    }
  });

  taskDeleteBtn.addEventListener("click", (e) => {
    listEle.removeChild(taskEle);
    for (let key of keys) {
      if (localStorage.getItem(key) === taskInputEle.value) {
        localStorage.removeItem(key);
      }
    }
  });

  taskCheckBoxEle.addEventListener("click", function (e) {
    if (e.target.checked) {
      taskInputEle.style.textDecoration = "line-through";
    } else {
      taskInputEle.style.textDecoration = "none";
    }
  });
}

formEle.addEventListener("submit", function (e) {
  e.preventDefault();

  let task = inputEle.value;
  if (!task) return alert("Please enter value!");

  //Local Storage
  let localStorageID = Math.floor(Math.random() * 50);

  localStorage.setItem(localStorageID, task);

  createNewTask(task);
});
