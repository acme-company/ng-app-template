import { Component, OnInit } from '@angular/core';
import { widgets } from './data/widgets';

export interface Widget {
  title: string;
  icon:string;
  description: string;
  category: string;
  module: string
}

@Component({
    selector: 'welcome',
    templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    leftWidgets: Widget[];
    centerWidgets: Widget[];
    rightWidgets: Widget[];
    wip: Widget;

    
    constructor() {
    }

    ngOnInit() {
        this.wip = widgets.filter(t => t.title == 'Load Work-In-Progress')[0];
        let tmp = widgets.filter(t => t.title !== this.wip.title);
        this.leftWidgets = tmp.filter(t => t.category == 'left');
        this.centerWidgets = tmp.filter(t => t.category == 'center');
        this.rightWidgets = tmp.filter(t => t.category == 'right');
    }
}