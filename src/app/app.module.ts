import { NgModule, ErrorHandler, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
//import { HttpInterceptor } from './http.service';
import { Router, RouterModule } from "@angular/router";
import { HttpMonitor } from "./http.monitor";
import { SpinnerComponent } from "./spinner.component";
import { ErrorMonitor } from "./error.monitor";
import { GlobalErrorHandler } from "./global-error.handler";
import { ErrorDialogComponent } from "./error-dialog.component";
import { HomeComponent } from './home.component';
import { DisableDirective } from "./disable.directive";
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { RetryHttpInterceptor } from "./retry.interceptor";
import { HttpClientModule } from "@angular/common/http";
import { RequestHttpInterceptor } from "./request.interceptor";

let routes = [
   { path: '', component: HomeComponent},
   { path: 'error', component: ErrorDialogComponent, outlet: 'modal' },
   { path: '**', redirectTo: ''}

];

var routerModule = RouterModule.forRoot(routes, { useHash: true});

// export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, monitor: HttpMonitor, router: Router) {
//   return new HttpInterceptor(xhrBackend, requestOptions, monitor);
// }

@NgModule({
  imports: [BrowserModule, HttpClientModule, routerModule],
  declarations: [DisableDirective,AppComponent, SpinnerComponent,ErrorDialogComponent, HomeComponent],
  exports: [AppComponent],
  providers: [
    ErrorMonitor,
    HttpMonitor,
    ErrorDialogComponent,
    // {
      
    //   provide: Http,
    //   useFactory: httpFactory,
    //   deps: [XHRBackend, RequestOptions, HttpMonitor]
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHttpInterceptor,
      multi: true,
    },    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryHttpInterceptor,
      multi: true,
    },    
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
      deps: [ErrorMonitor, Injector]
    },
  ],
  bootstrap: [AppComponent]

})
export class AppModule {


}
