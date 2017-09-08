import { ErrorHandler, ApplicationRef, Injector } from "@angular/core";
import { ErrorMonitor } from "./error.monitor";
import { Router } from "@angular/router";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorInfo } from './error-info.model';
import * as StackTrace from 'stacktrace-js';
import { HttpErrorResponse } from "@angular/common/http";



export class GlobalErrorHandler implements ErrorHandler {
    constructor(private errorMonitor: ErrorMonitor, private injector: Injector) {

    }
    handleError(error: any): void {
        var errorInfo = new ErrorInfo();
        if (error instanceof HttpErrorResponse) {
            var httpError = <HttpErrorResponse>error;
            errorInfo.name = httpError.name;
            errorInfo.message = httpError.message;
            errorInfo.name = httpError.name;
            errorInfo.ok = httpError.ok;
            errorInfo.stack = httpError.error.stacktrace;
            errorInfo.status = httpError.status;
            errorInfo.statusText = httpError.statusText;
            errorInfo.url = httpError.url;
            console.log(httpError);
        }
        else {
            const location = this.injector.get(LocationStrategy);
            const message = error.message ? error.message : error.toString();
            const url = location instanceof PathLocationStrategy
                ? location.path() : '';

            errorInfo.message = error.message;
            errorInfo.stack = error.stack;

        }
        this.errorMonitor.next(errorInfo);
        var router:Router = this.injector.get(Router);
         router.navigate([
          { outlets: { modal: ['error'] }
          }], { skipLocationChange: true});                
    }

}