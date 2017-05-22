import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.service';
import { SortService } from "./sort.service";

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [SortService],
    styles: [ `
       tr:hover {
           background:yellow;
       }
    `]
})
export class UsersComponent implements OnInit {
    @Input() users: User[];
    @Output() userDeleted: EventEmitter<User>;
    @Output() userEdited: EventEmitter<User>;

    constructor() { 
        this.users = [];
        this.userDeleted = new EventEmitter<User>();
        this.userEdited = new EventEmitter<User>();
    }

    onDelete(user:User) {
        this.userDeleted.next(user);
    }

    onEdit(user:User) {

        this.userEdited.next(user);
    }

    ngOnInit() { }
}