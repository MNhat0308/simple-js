class TodoList {
  constructor() {
    this.root = document.getElementById("app")
    this.rootUl = document.createElement("div")
    this.rootInput = document.createElement("div")

    this.inputTodo = null
    this.inputTime = null
    this.todoList = [
      {
        "uuid": 0.36186251022237426,
        "checked": false,
        "value": "123",
        "start": new Date(),
        "end": ''
      },
    ]
    this.init()
  }

  init() {
    this.loadFromLocalStorage()
    this.root.appendChild(this.rootInput)
    this.root.appendChild(this.rootUl)

    this.createInput(this.rootInput)
    this.createList(this.rootUl, this.todoList)

  }

  createList(nodeRender, arr) {
    let ul = document.createElement("ul")
    arr.forEach(element => {
      let li = document.createElement("li")
      let checkbox = document.createElement("input")
      let span = document.createElement("span")
      let progress = document.createElement("progress")
      let deleteButton = document.createElement("button")

      li.dataset.uuid = element.uuid
      checkbox.type = "checkbox"
      checkbox.checked = element.checked
      checkbox.dataset.idcheck = element.uuid
      checkbox.addEventListener('change', this.handleOnChecked.bind(this))

      span.innerText = element.value
      span.style.textDecoration = element.checked ? "line-through" : "none"

      deleteButton.type = "button"
      deleteButton.id = element.uuid
      deleteButton.innerText = "Xóa"

      deleteButton.addEventListener('click', this.handleDeleteSingle.bind(this))

      li.appendChild(checkbox)
      li.appendChild(span)
      li.appendChild(deleteButton)

      ul.appendChild(li)
    });
    nodeRender.appendChild(ul)
  }

  createInput(nodeRender) {
    let todoText = document.createElement("input")
    let inputTime = document.createElement("input")
    let btnAdd = document.createElement("input")
    let btnDeleteTodo = document.createElement("input")
    let btnDeleteAll = document.createElement("input")

    todoText.type = "text"
    todoText.id = "todo_value"

    inputTime.type = "time"

    btnAdd.type = "button"
    btnAdd.value = "ADD"
    btnAdd.addEventListener('click', this.handleAdd.bind(this))

    btnDeleteTodo.type = "button"
    btnDeleteTodo.value = "DELETE DONE"
    btnDeleteTodo.addEventListener('click', this.handleDeleteMultipleDone.bind(this))

    btnDeleteAll.type = "button"
    btnDeleteAll.value = "DELETE ALL"
    btnDeleteAll.addEventListener('click', this.handleDeleteAll.bind(this))

    nodeRender.appendChild(todoText)
    nodeRender.appendChild(inputTime)
    nodeRender.appendChild(btnAdd)
    nodeRender.appendChild(btnDeleteTodo)
    nodeRender.appendChild(btnDeleteAll)

    this.inputTodo = todoText
    this.inputTime = inputTime
  }

  setData2LocalStorage() {
    localStorage.setItem('todoLists', JSON.stringify(this.todoList))
  }
  loadFromLocalStorage() {
    let list = localStorage.getItem('todoLists')
    if (list) {
      this.todoList = JSON.parse(list)
    }
  }
  renderList() {
    this.removeList(this.rootUl)
    this.createList(this.rootUl, this.todoList)
    this.setData2LocalStorage()
  }

  removeList(nodeParent) {
    while (nodeParent.hasChildNodes()) {
      nodeParent.removeChild(nodeParent.lastChild)
    }
  }
  handleAdd() {
    console.log(this.inputTime.value);
    // if (this.validateInputTodo()) {
    //   const payload = {
    //     uuid: Math.random(),
    //     checked: false,
    //     value: this.inputTodo.value,
    //     start: new Date(),
    //     end: ''
    //   }
    //   this.todoList.push(payload)
    //   this.renderList()
    //   this.handleFocusAndClearText()
    // }
    // else {
    //   alert("type text pls!!!")
    //   this.handleFocusAndClearText()
    // }
  }
  handleFocusAndClearText() {
    this.inputTodo.value = ''
    this.inputTodo.focus()
  }

  handleOnChecked(e) {
    const idCheked = e.target.dataset.idcheck
    const checked = e.target.checked

    this.todoList.map(item => {
      if (item.uuid === parseFloat(idCheked)) {
        item.checked = checked
      }
    })
    this.renderList()
  }
  handleDeleteSingle(e) {
    const uuid = e.target.parentElement.dataset.uuid
    this.todoList = this.todoList.filter(item => item.uuid !== parseFloat(uuid))
    this.renderList()
  }

  handleDeleteMultipleDone() {
    this.todoList = this.todoList.filter(item => !item.checked)
    this.renderList()
  }

  handleDeleteAll() {
    this.todoList = []
    this.renderList()
  }

  validateInputTodo() {
    return this.inputTodo.value === '' ? false : true
  }

}

var todo = new TodoList()
