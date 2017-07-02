import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from "./inbox.component";
import { InboxRoutingModule } from "./inbox-routing.module";

console.log('* InboxModule Loaded *')

@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule
  ],
  declarations: [
    InboxComponent
  ],
  providers: [
    
  ]
})
export class InboxModule {

 }