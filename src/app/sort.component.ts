import { Component, OnInit, ElementRef } from '@angular/core';
import { SortService } from "./sort.service";

enum SortEnum 
{
    Ascending = 0,
    Descending = 1,
    None = 2
}

@Component({
    selector: '[sort]',
    templateUrl: './sort.component.html'
})
export class SortComponent implements OnInit {
    SortEnum: any = SortEnum;
    name: string;
    sortEnum: SortEnum;
    constructor(private elem: ElementRef, public sortService:SortService) {
        this.name = elem.nativeElement.getAttribute('sort');
        this.sortEnum = SortEnum.None;
        this.sortService.cleared$.subscribe(t=> {
            this.sortEnum = SortEnum.None;
        });
     }

    ngOnInit() { }

    sort() {
       if (this.sortEnum == SortEnum.None) {
         this.sortService.clearFields();
         this.sortService.addField({ name: this.name, asc: true});
         this.sortEnum = SortEnum.Ascending;
       }

       else {
           
            if (this.sortEnum == SortEnum.Ascending) {
                this.sortService.clearFields();
                this.sortService.addField({ name:this.name, asc: false});
                this.sortEnum = SortEnum.Descending;
            }
            else {
                this.sortService.clearFields();
                this.sortEnum = SortEnum.None;
            }
       }
    }
}