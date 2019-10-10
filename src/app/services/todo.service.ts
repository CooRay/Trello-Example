import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/itodo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  todoList: ITodo[] = [
    {
      id: 1,
      title: "First Todo",
      isDoing: false,
      isDone: false,
      isEditing: false
    },
    {
      id: 2,
      title: "Second Todo",
      isDoing: false,
      isDone: false,
      isEditing: false
    },
    {
      id: 3,
      title: "Third Todo",
      isDoing: false,
      isDone: false,
      isEditing: false
    }
  ];

  getAll(): ITodo[] {
    return this.todoList;
  }

  getDone(): ITodo[] {
    return this.todoList.filter(todo => todo.isDone);
  }

  getDoing(): ITodo[] {
    return this.todoList.filter(todo => todo.isDoing && !todo.isDone);
  }

  getTodo(): ITodo[] {
    return this.todoList.filter(todo => !todo.isDoing && !todo.isDone);
  }

  add(title: String): void {
    const newId =
      this.todoList
        .map(x => x.id)
        .reduce((prev, curr) => (prev < curr ? prev : curr)) + 1;

    this.todoList.push({
      id: newId,
      title: title,
      isDoing: false,
      isDone: false,
      isEditing: false
    });
  }

  delete(todo: ITodo): void {
    var index = this.todoList.findIndex(todo => todo === todo);
    this.todoList.splice(index, 1);
  }
}
