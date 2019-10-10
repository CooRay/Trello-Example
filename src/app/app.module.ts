import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoService } from "./services/todo.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
