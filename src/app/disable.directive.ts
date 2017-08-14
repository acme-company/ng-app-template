import { Directive, HostBinding, ElementRef, OnDestroy } from "@angular/core";
import { HttpMonitor } from "./http.monitor";
import { Subscription } from "rxjs/Subscription";

@Directive({
    selector: '[dyn]'
})
export class DisableDirective implements OnDestroy {
    subscription: Subscription;
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    constructor(private httpMonitor: HttpMonitor, private elementRef: ElementRef) {
       this.subscription = this.httpMonitor.pendingRequests.subscribe(t=> {
            if (t == 0) {
                this.elementRef.nativeElement.removeAttribute('disabled');
            }
            else {
                this.elementRef.nativeElement.setAttribute('disabled', 'disabled');
            }
        });
    }

}