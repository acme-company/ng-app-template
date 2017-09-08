import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHandler, HttpEvent } from "@angular/common/http";

import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/finally'

import { HttpMonitor } from "../request-spinner/http.monitor";

export class RequestHttpInterceptor implements HttpInterceptor {
    constructor(private httpMonitor: HttpMonitor){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //throw new Error('something');
       this.httpMonitor.addRequest();
        return next.handle(req).finally(() => {
            this.httpMonitor.removeRequest();
        })
    
    }
}