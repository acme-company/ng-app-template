import { Http, RequestOptionsArgs, RequestOptions, Response, Request, ConnectionBackend } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/take";
import "rxjs/add/operator/concat";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/share";
import "rxjs/add/operator/timeout";

import { HttpMonitor } from "./http.monitor";

export class HttpInterceptor extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private monitor: HttpMonitor) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, options);
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, options);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, options);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, options);
    }
    intercept(observable: Observable<Response>): Observable<Response> {
        this.monitor.addRequest();
        return observable.timeout(8000).retryWhen(function(errors) { 
          return errors.delay(1000).scan((errorCount, err) => {
                console.log(errorCount);
                if(errorCount >= 2) {
                    throw err;
                }
                return errorCount + 1;
                }, 0);
            })

        .finally(() => {
            this.monitor.removeRequest();
        })
    }
}