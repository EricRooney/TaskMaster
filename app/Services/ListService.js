import List from "../Models/List.js";
import Task from "../Models/Task.js";
import _store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(listData) {
    let list = new List(listData);
    _store.State.lists.push(list);
    _store.saveState();
  }

  deleteList(listId) {
    _store.State.lists = _store.State.lists.filter(list => {
      return list.id != listId;
    });
    _store.saveState();
    //   if (window.confirm("Do you really want to delete this list?")) {
    //   }
  }

  addTask(taskData) {
    let task = new Task(taskData);
    let foundList = _store.State.lists.find(list => list.id === task.listId);
    foundList.tasks.push(task);
    _store.saveState();
  }

  deleteTask(listId, taskId) {
    let foundList = _store.State.lists.find(list => list.id === listId);
    foundList.tasks = foundList.tasks.filter(task => {
      return task.id != taskId;
    });
    _store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
