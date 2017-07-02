import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent { 
    @Input() title: string;
    @Input() icon: string;
    
}
