import { ErrorHandler, ApplicationRef, Injector } from "@angular/core";
import { ErrorMonitor } from "./error.monitor";
import { Router } from "@angular/router";

export class GlobalErrorHandler implements ErrorHandler {
    constructor(private errorMonitor: ErrorMonitor, private injector: Injector) {

    }
    handleError(error: any): void {
        
        var router:Router = this.injector.get(Router);
        this.errorMonitor.next(error);
        // console.log(error);
         router.navigate([
          { outlets: 
            { modal: ['error'] }
          }], { skipLocationChange: true});
        
    }

}