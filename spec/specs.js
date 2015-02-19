describe("ToDo", function() {
  describe("name", function() {
    it("takes a name and returns that name", function() {
      var testToDo = Object.create(ToDo);
      testToDo.name("Home");
      expect(testToDo.name).to.equal("Home");
    });
  });
});
