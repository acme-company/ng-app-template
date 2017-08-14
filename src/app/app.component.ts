import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { Router } from "@angular/router";
import { ErrorMonitor } from "./error.monitor";

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private router:Router, private monitor:ErrorMonitor) {
    this.monitor.error.subscribe(t=> {

    });
    
  }
  public name: string = 'Angular';
  public ngOnInit() {
    console.log('called');
  }


}
