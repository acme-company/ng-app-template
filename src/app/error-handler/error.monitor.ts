import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";


import 'rxjs/add/operator/filter';
import { ErrorInfo } from "./error-info.model";


export class ErrorMonitor {
    public errorEvent$:Observable<any>;
    public lastError: ErrorInfo;
    private errorSubject: BehaviorSubject<any>

    constructor() {
        this.errorSubject = new BehaviorSubject<ErrorInfo>(null);
        this.errorEvent$ = this.errorSubject.asObservable().filter(t=>t!=null);
    }


    next(error:ErrorInfo) {
        this.lastError = error;  
        this.errorSubject.next(this.lastError);
    }

}