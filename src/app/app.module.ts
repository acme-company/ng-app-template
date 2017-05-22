import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppModule as MyModule} from 'ng-module-template';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';
import { SortPipe} from './sort.pipe';
import { SortComponent } from './sort.component';
import { UsersComponent } from './users.component';
import { UserComponent } from "./user.component";


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule , MyModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, SortPipe, SortComponent, UsersComponent, UserComponent ],
  providers: [UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
