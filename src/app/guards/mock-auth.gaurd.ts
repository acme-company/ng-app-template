import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Http } from "@angular/http";
import { MockAuthService } from "./mock-auth.service";

@Injectable()
export class MockAuthGuard implements CanActivate {

    constructor(private router: Router, private mockAuthService: MockAuthService) { }

    canActivate() {
        return this.mockAuthService.isSiamsIntegrated().map(t=> {
            if (!t) {
                this.router.navigate(['/mockLogin']);
            }
            return t;
        });
    }
}