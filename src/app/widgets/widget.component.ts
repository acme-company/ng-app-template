import { Component, Input } from '@angular/core';
import { Widget } from "../welcome.component";

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent { 
    @Input() widget: Widget;
    
}
