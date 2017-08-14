import { Component } from "@angular/core";
import { HttpMonitor } from './http.monitor';

@Component({
    selector: '[spinner]',
    template: `
        <img *ngIf="httpMonitor.pendingRequestNumber >0" src="http://www.silkron.co.uk/images/spinner.gif" />
    `,
    styles: [
        `
            img {
                width: 20px;
                height: 20px;
            }
        `
    ]
})
export class SpinnerComponent {
    constructor(public httpMonitor:HttpMonitor){
        
    }

}