import { Component } from '@angular/core';
import { TodoService } from "./services/todo.service";
import { Todo } from "./services/todo.model";

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
   todos: Todo[];
   filterOption: string;
   constructor(private todoService: TodoService) {
      this.todos = this.todoService.all();
      this.filterOption = 'All';
   }
   add (nameCtrl) {
     this.todoService.addByName(nameCtrl.value);
     nameCtrl.value = '';
   }

   complete(item:Todo) {
      this.todoService.complete(item);
   }

   remove (item:Todo) {
      this.todoService.remove(item);
   }
}
