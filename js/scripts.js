var ToDo = {
  name: function(newName) {
    this.name = newName;
  },
  task: function(newTask) {
    this.task = newTask;
  }
};





// ---------------


$(function() {
  $("#add-name").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedTask = $("input#task").val();



  });
});
