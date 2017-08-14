import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  values: Observable<string[]>;
  constructor(private http:HttpClient) {
  
  }
    ngOnInit() { }
    clickme() {
        this.values = this.http.get<string[]>('http://localhost:58663/api/values');
    }
    
    clickme2() {
        throw new Error("Something went wrong!!");
    }
}