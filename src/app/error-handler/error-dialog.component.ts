import { Component, ApplicationRef, NgZone, Inject, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { ErrorMonitor, Property } from './error.monitor';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'error',
    templateUrl: 'error-dialog.component.html',
    styles: [
        `
        .modal {
            display: block;
            padding-right: 12px;
        }
        pre {
            font-size: 0.7em;
        }
        `
    ]
})
export class ErrorDialogComponent  {
    error: Property[];
    constructor(private errorMonitor:ErrorMonitor, private router: Router, @Inject(ChangeDetectorRef) private ref:ChangeDetectorRef){
        this.error = this.errorMonitor.lastError; 
        console.log(this.error); 
        setTimeout(t=> {
            this.ref.detectChanges();
        });
    }

    close() {
    
      this.router.navigate([{ outlets: { modal: null }}]);
    }


}