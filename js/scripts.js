function ToDo(itemTitle) {
  this.itemTitle = itemTitle;
}

function ToDoList() {
  this.toDos = [];
  this.currentId = 0
}

ToDoList.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

ToDoList.prototype.addToDo = function(ToDo) {
  ToDo.id = this.assignId();
  this.toDos.push(ToDo)
}

ToDoList.prototype.findListItem = function(id) {
  for (var i = 0; i < toDos.length; i += 1) {
    if(this.toDos[i].id == id) {
      return this.toDos[i];
    }
  }
  return false
}

var toDoList = new ToDoList();



$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault()
    var itemTitle = $("#toDoText").val();
    var itemToDo = new ToDo(itemTitle);
    toDoList.addToDo(itemToDo)
    console.log(toDoList.toDos)
   
    $("#checkboxList").append("<input type='checkbox'>" + toDoList.toDos[toDoList.toDos.length-1].itemTitle + "<br>")
    // for (var i = 0; i < toDos.length; i += 1)
  });


  $("form#checkboxList").submit(function(event){


  });
});