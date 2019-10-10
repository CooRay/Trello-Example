import { Component, OnInit, Input } from "@angular/core";
import { ITodo } from "./interfaces/itodo";
import { TodoService } from "./services/todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  newTodoTitle: String = "";
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addNew() {
    this.todoService.add(this.newTodoTitle);
    this.newTodoTitle = "";
  }

  get todoItems() {
    return this.todoService.getTodo();
  }
  get doingItems() {
    return this.todoService.getDoing();
  }
  get doneItems() {
    return this.todoService.getDone();
  }
}
