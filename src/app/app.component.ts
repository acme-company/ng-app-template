import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from "rxjs/Observable";
import { widgets } from './data/widgets';



export interface Widget {
  title: string;
  icon:string;
  description: string;
  category: string;
  module: string
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  leftWidgets: Widget[];
  centerWidgets:  Widget[];
  rightWidgets:  Widget[];
  wip: Widget;

  constructor() {
    this.wip = widgets.filter(t=>t.title == 'Load Work-In-Progress')[0];
    let tmp = widgets.filter(t=>t.title !== this.wip.title);
    this.leftWidgets = tmp.filter(t=>t.category == 'left');
    this.centerWidgets = tmp.filter(t=>t.category == 'center');
    this.rightWidgets = tmp.filter(t=>t.category == 'right');
  }


 }
