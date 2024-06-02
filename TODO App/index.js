// selectors

const taskForm = document.getElementById("task-form");
const submit = document.getElementById("submit");
const taskInput = document.getElementById("task-input");
const taskListDiv = document.getElementById("task-list");

// CREATE A NEW TASK
// function createTask() {
//   const inputValue = taskInput.value;

//   if (inputValue) {
//     console.log(inputValue);
//   } else {
//     alert("Please insert a task!");
//   }
//   taskInput.value = "";

//   //   creating a task list div
//   const listDiv = document.createElement("div");
//   listDiv.classList.add("tasks");

//   // create a task name tag / input
//   const taskName = document.createElement("input");
//   taskName.value = inputValue;
//   taskName.classList.add("w-[80%]");
//   taskName.setAttribute("readonly", "readonly");

//   // create a button group div
//   const buttonGroup = document.createElement("div");
//   buttonGroup.classList.add("w-[20%]");
//   buttonGroup.classList.add("flex");
//   buttonGroup.classList.add("gap-2");

//   // creating a delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("delete");
//   deleteBtn.innerHTML = "Delete";

//   // creating a edit button
//   const editButton = document.createElement("button");
//   editButton.classList.add("edit");
//   editButton.innerHTML = "Edit";

//   // assinging each element to a parent element
//   buttonGroup.appendChild(deleteBtn);
//   buttonGroup.appendChild(editButton);
//   listDiv.appendChild(taskName);
//   listDiv.appendChild(buttonGroup);
//   taskListDiv.appendChild(listDiv);

//   //  DELTE A TASK
//   deleteBtn.addEventListener("click", (e) => {
//     listDiv.remove();
//     // e.target.parentElement.parentElement.remove();
//   });

//   // EDIT A TASK
//   editButton.addEventListener("click", (e) => {
//     console.log(e.target.innerText);
//     if (e.target.innerText == "Edit") {
//       taskName.removeAttribute("readonly");
//       taskName.focus();
//       editButton.innerText = "Save";
//     } else {
//       editButton.innerText = "Edit";
//       taskName.setAttribute("readonly", "readonly");
//     }
//   });
// }

// CREATE A NEW TASK
function createTask() {
  const inputValue = taskInput.value;

  if (inputValue) {
    console.log(inputValue);
  } else {
    alert("Please insert a task!");
  }
  taskInput.value = "";

  //   //   creating a task list div
  //   const listDiv = document.createElement("div");
  //   listDiv.classList.add("tasks");

  //   // create a task name tag / input
  //   const taskName = document.createElement("input");
  //   taskName.value = inputValue;
  //   taskName.classList.add("w-[80%]");
  //   taskName.setAttribute("readonly", "readonly");

  //   // create a button group div
  //   const buttonGroup = document.createElement("div");
  //   buttonGroup.classList.add("w-[20%]");
  //   buttonGroup.classList.add("flex");
  //   buttonGroup.classList.add("gap-2");

  //   // creating a delete button
  //   const deleteBtn = document.createElement("button");
  //   deleteBtn.classList.add("delete");
  //   deleteBtn.innerHTML = "Delete";

  //   // creating a edit button
  //   const editButton = document.createElement("button");
  //   editButton.classList.add("edit");
  //   editButton.innerHTML = "Edit";

  //   // assinging each element to a parent element
  //   buttonGroup.appendChild(deleteBtn);
  //   buttonGroup.appendChild(editButton);
  //   listDiv.appendChild(taskName);
  //   listDiv.appendChild(buttonGroup);
  //   taskListDiv.appendChild(listDiv);

  taskListDiv.innerHTML += `
    <div class="tasks">
    <input
        type="text"
        value="create a landing page"
        class="w-[80%] task"
        readonly
    />
    <div class="w-[20%]">
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
    </div>
    </div> 
    `;

  const deleteBtn = document.querySelectorAll(".delete");
  const editButton = document.querySelectorAll(".edit");

  //   console.log(deleteBtn);

  //   console.log(deleteBtn);
  deleteBtn.forEach((item) => {
    //  DELTE A TASK
    item.addEventListener("click", (e) => {
      // listDiv.remove();
      e.target.parentElement.parentElement.remove();
    });
  });

  // EDIT A TASK
  editButton.forEach((item) => {
    item.addEventListener("click", (e) => {
      //   console.log(e.target.parentNode.parentNode.firstElementChild);
      const task = e.target.parentNode.parentNode.firstElementChild;
      if (e.target.innerText == "Edit") {
        task.removeAttribute("readonly");
        task.focus();
        item.innerText = "Save";
      } else {
        item.innerText = "Edit";
        task.setAttribute("readonly", "readonly");
      }
    });
  });
}

submit.addEventListener("click", createTask);

// CREATE A TASK LIST
// function createTaskList(inputValue) {
//   taskListDiv.innerHTML += `
//       <div
//       class="task p-2 flex items-center justify-between border-[1px] border-gray-200 rounded-lg"
//       >
//           <p class="text-md">${inputValue}</p>
//           <div>
//               <button class="bg-red-600 p-2 text-white" onclick="deleteTask(this.event)">Delete</button>
//               <button class="bg-green-600 p-2 text-white">Edit</button>
//           </div>
//       </div>
//     `;
// }

// function deleteTask(event) {
//   console.log("test");
//   console.log(event);
// }
