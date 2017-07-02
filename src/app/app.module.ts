import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MasterpageComponent } from "./shared/masterpage.component";
import { HeaderComponent } from "./shared/header.component";
import { FooterComponent } from "./shared/footer.component";
import { WidgetComponent } from "./widgets/widget.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ 
    AppComponent, 
    MasterpageComponent, 
    HeaderComponent, 
    FooterComponent,
    WidgetComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
