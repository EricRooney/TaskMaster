import { generateId } from "../utils.js";
import Task from "./Task.js";

export default class List {
  constructor({ id = generateId(), name, tasks = [] }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id;
    this.name = name;
    this.tasks = tasks.map(s => new Task(s));
  }

  get template() {
    return `
<div class="col-5 p-3 m-3 border rounded justify-content-center bg-info">
<h1 class="text-center border-bottom"><button type="button" class="bg-transparent border-0" onclick="app.listController.deleteList('${
      this.id
    }')">
<span aria-hidden="true">&times;</span></button>${this.name}</h1>
<dl class="ml-5">
    ${this.drawTasks()}
</dl>
<form onsubmit="app.listController.addTask(event, '${this.id}')">
    <div class="form-group row justify-content-center text-center">
        <label for="name" class="col-sm-1-12 col-form-label"></label>
        <div class="col-sm-1-12">
            <input type="text" class="form-control" name="name" id="name" placeholder="Enter task...">
        </div>
    </div>
    <div class="form-group row justify-content-center text-center">
        <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Create</button>
        </div>
    </div>
</form>
</div>
`;
  }

  drawTasks() {
    let template = "";
    console.log("DrawingTasks");
    this.tasks.forEach(task => {
      template += task.template;
    });
    return template;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
