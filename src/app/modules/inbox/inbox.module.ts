import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from "./inbox.component";

console.log('* InboxModule Loaded *')

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InboxComponent
  ],
  providers: [
    
  ]
})
export class InboxModule {

 }