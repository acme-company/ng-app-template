import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { TodoService } from "./services/todo.service";
import { FilterPipe } from "./services/filter.pipe";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,FilterPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ TodoService ]
})
export class AppModule { }
