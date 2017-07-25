
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { MockAuthModel } from "./mock-auth.model";

@Injectable()
export class MockAuthService {

    constructor(private http: Http) {
    }

    isSiamsIntegrated() : Observable<boolean> {
        return this.http.get('http://localhost:8081/api/siams/integrated').map(t=>t.json().result);
    }

    simulateLogin(mockAuthModel: MockAuthModel): Observable<boolean> {
        return this.http.post('http://localhost:8081/api/siams/mock/authenticate', mockAuthModel)
            .map((response: Response) => {
                let token = response.json() && response.json().authenticated;
                if (token) {
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): Observable<boolean> {
        return this.http.post('http://localhost:8081/api/siams/logoff',{}).map(t=>t.json().result);
    }
}