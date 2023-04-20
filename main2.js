// let root = document.getElementById("app")

// let rootLi = document.createElement("div")

// let rootInput = document.createElement("div")

// let todoList = [
//   {
//     uuid: Math.random(),
//     checked: true,
//     value: '123',

//   }
// ]

// function createList(nodeRender, arr) {
//   let ul = document.createElement("ul")
//   arr.forEach(element => {
//     let li = document.createElement("li")
//     let checkbox = document.createElement("input")
//     let span = document.createElement("span")
//     let deleteButton = document.createElement("button")

//     checkbox.type = "checkbox"
//     checkbox.checked = element.checked
//     checkbox.dataset.idcheck = element.uuid
//     checkbox.addEventListener('change', function (e) {
//       console.log(e.target.checked);
//     })

//     span.innerText = element.value
//     span.style.textDecoration = element.checked ? "line-through" : "none"
//     deleteButton.type = "button"
//     deleteButton.id = element.uuid
//     deleteButton.innerText = "Xóa"

//     li.appendChild(checkbox)
//     li.appendChild(span)
//     li.appendChild(deleteButton)

//     ul.appendChild(li)
//   });
//   nodeRender.appendChild(ul)
// }

// function createInput(nodeRender) {
//   let todoText = document.createElement("input")
//   let btnAdd = document.createElement("input")
//   let btnDeleteTodo = document.createElement("input")
//   let btnDeleteAll = document.createElement("input")

//   todoText.type = "text"
//   todoText.id = "todo_value"

//   btnAdd.type = "button"
//   btnAdd.innerHTML = "ADD"
//   btnAdd.addEventListener('click', function () {
//     handleAdd()
//   })

//   btnDeleteTodo.type = "button"
//   btnDeleteTodo.innerHTML = "DELETE FILTERED"

//   btnDeleteAll.type = "button"
//   btnDeleteAll.innerHTML = "DELETE ALL"

//   nodeRender.appendChild(todoText)
//   nodeRender.appendChild(btnAdd)
//   nodeRender.appendChild(btnDeleteTodo)
//   nodeRender.appendChild(btnDeleteAll)

// }

// function removeList(nodeParent) {
//   while (nodeParent.hasChildNodes()) {
//     nodeParent.removeChild(nodeParent.lastChild)
//   }
// }
// function handleAdd() {
//   const valueTodo = document.getElementById('todo_value')
//   const payload = {
//     uuid: Math.random(),
//     checked: false,
//     value: valueTodo.value,
//   }
//   todoList.push(payload)
//   removeList(rootLi)
//   createList(rootLi, todoList)
// }

// function handleOnChecked() {
//   const valueTodo = document.getElementById('todo_value')
//   const payload = {
//     uuid: Math.random(),
//     checked: false,
//     value: valueTodo.value,
//   }
//   todoList.push(payload)
//   removeList(rootLi)
//   createList(rootLi, todoList)
// }

// root.appendChild(rootInput)
// root.appendChild(rootLi)


// createInput(rootInput)
// createList(rootLi, todoList)

