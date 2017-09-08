import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/filter';

export interface Property {
    key: string;
    value: string;
}

export class ErrorMonitor {
    public error:Observable<any>;
    public lastError: Property[];
    private errorSubject: BehaviorSubject<any>

    constructor() {
        this.errorSubject = new BehaviorSubject<any>(null);
        this.error = this.errorSubject.asObservable().filter(t=>t!=null);
    }

    isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    next(error:any) {
        console.log("ERROR IS");
        console.log(error);
        this.lastError = [];  
        if (error instanceof Error) {
            if (error.message)
                this.lastError.push({key: 'message', value: error.message});

            if (error.message)
                this.lastError.push({key: 'name', value: error.message});

            if (error.stack)
                this.lastError.push({key: 'stack', value: error.stack});
        } 
        for (var i in error) {
            //console.log(error[i]);
            if (!this.isFunction(error[i]) && typeof(error[i]) !== 'object' && i !== 'constructor')
                this.lastError.push({key: i, value: error[i]});
        }

        if (error.error) {
            for (var i in error.error) {
            if (!this.isFunction(error.error[i]) && typeof(error.error[i]) !== 'object')
                this.lastError.push({key: i, value: error.error[i]});
            }  
        }
        this.errorSubject.next(error);
    }

}