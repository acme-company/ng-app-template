import { Component } from '@angular/core';
import { User, UserService } from './user.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers: []
  
})
export class AppComponent {
  constructor(public userService: UserService) {
  }

  onUserAdded(user:User) {
    this.userService.addUser(user);
  }

  onUserDeleted(user:User) {

    this.userService.removeUser(user);
  }

  onUserEdited(user:User) {
    this.userService.updateUser(user);
  }
}



