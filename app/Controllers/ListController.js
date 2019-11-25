import ListService from "../Services/ListService.js";
import _store from "../store.js";
import Swal from "../../node_modules/sweetalert2/src/sweetalert2.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = _store.Lists;
  console.log(lists);
  lists.forEach(list => {
    template += list.template;
  });
  document.querySelector("#lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
    //NOTE: After the store loads, we can automatically call to draw the lists.
  }

  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      name: formData.name.value
    };
    ListService.addList(newList);
    formData.reset();
    _drawLists();
  }
  deleteList(listId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to use this list anymore!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value === true) {
        Swal.fire({ icon: "success", text: "Successfully Deleted List" });
        ListService.deleteList(listId);
        _drawLists();
      } else {
        Swal.fire({ icon: "error" });
      }
    });
  }

  addTask(event, listId) {
    event.preventDefault();
    let formData = event.target;

    let newTask = {
      name: formData.name.value,
      listId: listId
    };
    ListService.addTask(newTask);
    formData.reset();
    _drawLists();
  }

  deleteTask(listId, taskId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to use this task anymore!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value === true) {
        Swal.fire({ icon: "success", text: "Successfully Deleted Task" });
        ListService.deleteTask(listId, taskId);
        _drawLists();
      } else {
        Swal.fire({ icon: "error" });
      }
    });
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
