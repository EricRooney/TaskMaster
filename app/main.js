import ListController from "./Controllers/ListController.js";

//NOTE This should be good to go
class App {
  listController = new ListController();

  constructor() {}
}

window["app"] = new App();
