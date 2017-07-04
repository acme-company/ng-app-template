import { Component, OnInit } from '@angular/core';
import { widgets } from './data/widgets';
import { Title } from "@angular/platform-browser";

export interface Widget {
  title: string;
  icon:string;
  description: string;
  category: string;
  module: string,
  custom: boolean,
  points: string[]
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
    
    
    constructor(title:Title) {
        title.setTitle("Student Finance System");
        this.wip = widgets.filter(t => t.title == 'Load Work-In-Progress')[0];
        let tmp = widgets.filter(t => !t.custom);
        this.leftWidgets = tmp.filter(t => t.category == 'left');
        this.centerWidgets = tmp.filter(t => t.category == 'center');
        this.rightWidgets = tmp.filter(t => t.category == 'right');
    }

    getClassName(module:string){
        return module ? module.replace("/","") : module;
    }

    ngOnInit() {
    }
}