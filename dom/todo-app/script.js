//get form, input, list values
let formEle = document.querySelector("#form_container");
let inputEle = document.querySelector("#input_add_task");
let listEle = document.querySelector("#task_data");
let keys = Object.keys(localStorage);
let update;

window.addEventListener("load", () => {
  if (keys) {
    for (let key of keys) {
      console.log(key);
      createNewTask(JSON.parse(localStorage.getItem(key)));
    }
  }
});

function createNewTask(task) {
  //create tasks element

  console.log(task);
  let taskEle = document.createElement("div");
  taskEle.classList.add("tasks");

  //create a  checkbox
  let taskCheckBoxEle = document.createElement("input");
  taskCheckBoxEle.setAttribute("type", "checkbox");
  taskCheckBoxEle.checked = task[0];

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
  taskInputEle.setAttribute("value", task[1]);
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
  taskEditBtn.innerText = "Edit";
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
    let keyEdit = Object.keys(localStorage);
    if (taskEditBtn.innerText === "Edit") {
      for (let key of keyEdit) {
        let jsonData = JSON.parse(localStorage.getItem(key));
        console.log(jsonData);
        console.log(taskInputEle.value);
        if (jsonData[1] === taskInputEle.value) {
          console.log(key);
          update = key;
        }
      }
      console.log(update);
      taskEditBtn.innerText = "Save";
      taskInputEle.removeAttribute("readonly");
      taskInputEle.focus();
    } else {
      taskEditBtn.innerText = "Edit";
      localStorage.setItem(update, JSON.stringify([false, taskInputEle.value]));
      update = "";
      taskInputEle.setAttribute("readonly", "readonly");
    }
  });

  taskDeleteBtn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();

    let keyEdit = Object.keys(localStorage);
    // listEle.removeChild(taskEle);
    for (let key of keyEdit) {
      console.log(JSON.parse(localStorage.getItem(key))[1]);
      //["false,value"]
      if (JSON.parse(localStorage.getItem(key))[1] === taskInputEle.value) {
        localStorage.removeItem(key);
      }
    }
  });

  taskCheckBoxEle.addEventListener("click", function (e) {
    let keyEdit = Object.keys(localStorage);

    let currentValue = e.target.nextElementSibling.childNodes[0];

    //console.log(currentValue)

    for (let key of keyEdit) {
      let keyValue = JSON.parse(localStorage.getItem(key));
      if (keyValue[1] === currentValue.value) {
        console.log(key, keyValue[0], keyValue[1]);
        if (keyValue[0]) {
          localStorage.setItem(
            key,
            JSON.stringify([false, currentValue.value])
          );
          currentValue.style.textDecoration = "none";
        } else {
          localStorage.setItem(key, JSON.stringify([true, currentValue.value]));

          currentValue.style.textDecoration = "line-through";
        }
      }
    }
    // if (e.target.checked) {
    //   taskInputEle.style.textDecoration = "line-through";
    //   localStorage.setItem(update, JSON.stringify([true, taskInputEle.value]));
    //   update = "";
    // } else {
    //   taskInputEle.style.textDecoration = "none";
    //   localStorage.setItem(update, JSON.stringify([false, taskInputEle.value]));
    //   update = "";
    // }
  });
}

formEle.addEventListener("submit", function (e) {
  e.preventDefault();

  let task = [false, inputEle.value];
  if (!task[1]) return alert("Please enter value!");
  let localStorageID = localStorage.length + 1;
  //Local Storage

  localStorage.setItem(localStorageID, JSON.stringify(task));
  createNewTask(task);
});
