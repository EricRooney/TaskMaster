import ListController from "./Controllers/ListController.js";

//NOTE This should be good to go
class App {
  listController = new ListController();

  constructor() {
    console.log("Main Works");
  }
}

window["app"] = new App();
