var ToDo = {
  name: function(newName) {
    this.name = newName;
  },
  task: function(newTask) {
    this.task = newTask;
  }
};


// --------------------------

$(function() {
  $("form#new-lists").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#list-name").val();
    var newToDo = { name: inputtedName, task: [] };

    $("ul.lists").append("<li><span>" + newToDo.name + "</span></li>");

    $(".lists").last().click(function() {
      $(".task-header").text(newToDo.name);
      $("form#new-tasks").submit(function(event) {
        event.preventDefault();
        var inputtedTask = $("input#task-name").val();
        newToDo.task.push(inputtedTask);
        var lastItem = newToDo.task[newToDo.task.length - 1];
        $("ul.tasks").append("<li>" + lastItem + "</li>");
      });
    });
  });
});
