import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { ReviewComponent } from "./review.component";


console.log('* ReviewModule Loaded *')

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ReviewComponent
  ],
  providers: [
    
  ],
  bootstrap: [
      ReviewComponent
  ]
})
export class ReviewModule {

 }