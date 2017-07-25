import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';

import { RoutingModule }        from './app.routing';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from "./guards/auth.service";
import { MockAuthService } from "./guards/mock-auth.service";
import { MockLoginComponent } from "./login/mock-login.component";
import { MockAuthGuard } from "./guards/mock-auth.gaurd";

@NgModule({
  imports:      [ 
    BrowserModule, 
    RoutingModule,
    HttpModule 
  ],
  declarations: [ 
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    MockLoginComponent 
  ],
  providers: [
    AuthGuard,
    AuthService,
    MockAuthGuard,
    MockAuthService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
