import { Component, OnInit, Input } from "@angular/core";
import { ITodo } from "../interfaces/itodo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  constructor() {}

  ngOnInit() {}

  setDoing() {
    this.todo.isDoing = true;
  }
  setDone() {
    this.todo.isDone = true;
  }
}
