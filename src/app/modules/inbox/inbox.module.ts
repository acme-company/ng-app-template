import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from "./inbox.component";
import { InboxRoutingModule } from "./inbox-routing.module";
import { LettersComponent } from "./letters.component";

console.log('* InboxModule Loaded *')

@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule
  ],
  declarations: [
    InboxComponent, LettersComponent
  ],
  providers: [
    
  ]
})
export class InboxModule {

 }