import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name;
  }

  get template() {
    return `
    <button type="button" class="bg-transparent border-0" onclick="app.listController.deleteTask('${this.listId}','${this.id}')">
<span aria-hidden="true">&times;</span></button>
    ${this.name}
    <br>
  `;
  }
}
