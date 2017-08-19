import { Injectable } from '@angular/core';
import { Todo } from "./todo.model";

@Injectable()
export class TodoService {
    nextid: number;
    todos: Todo[];
    
    constructor() { 
        this.todos = [];
        this.nextid = 1;

        this.todos.push({
            id: 1,
            name: "Take out garbage",
            dateCreated: new Date(),
            dateComplete: null,
            done: false
        });
        this.todos.push({
            id: 2,
            name: "Do dishes",
            dateCreated: new Date(),
            dateComplete: null,
            done: false
        });
        this.todos.push({
            id: 3,
            name: "Make bed",
            dateCreated: new Date(),
            dateComplete: null,
            done: false
        });

    }

    all(): Todo[] {
        return this.todos;
    }

    find(id:number): Todo {
        return this.todos.find(t=>t.id == id);
    }
    add(todo:Todo): Todo {
        if (this.todos.length > 0) {
            this.nextid = this.todos.map(t=> t.id).sort((a,b)=> {
                if (a > b ) return 1;
                if (a < b ) return -1;
                return 0;
            }).reverse()[0] + 1;
        }
        // assign a new id
        todo.id = this.nextid;
        this.todos.push(todo);
        return todo;
    }

    addByName(name: string) {
        this.add({
            id: 0,
            name: name,
            dateCreated: new Date(),
            dateComplete: null,
            done: false
        })
    }

    remove(todo: Todo) {
        let index = this.todos.findIndex(t=>t.id === todo.id);
        if (index >= 0) {
            this.todos.splice(index, 1);
        }
    }

    complete (todo: Todo) {
        todo.dateComplete = new Date();
        todo.done = true;
    }
    
}