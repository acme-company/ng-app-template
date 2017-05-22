import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
export interface SortField {
    name: string;
    asc: boolean;
}


@Injectable()
export class SortService {
    public sortFields: SortField[] = [];
    public cleared$: Observable<string>;
    private subject: Subject<string>;
    
    constructor()
    {
        this.subject = new Subject<string>();
        this.cleared$ = this.subject.asObservable();
    }
    sortOn(name:string, asc: boolean) {
        if (!this.hasField(name)) {
            this.addField({ name: name, asc: asc });
        }
        else {
            this.updateField(name, asc);
        }
    }
    hasField(name:string) {
        return  this.sortFields.find(t=>t.name == name) != undefined;
    }

    getField(name:string) {
        return this.sortFields.find(t=>t.name == name);
    }

    addField(field:SortField) {
        this.sortFields.push({ name: field.name, asc: field.asc });
    }

    updateField(name:string, asc:boolean) {
        var sortField = this.getField(name);
        sortField.asc = asc;
    }

    clearFields() {
        this.sortFields = [];
        this.subject.next(null);
    }

    compare (field:string, asc: boolean, a:any, b:any): number {
        var eq =  a[field] == b[field];
            var less = a[field] < b[field];
            var greater = a[field] > b[field];
            var result = 0;
            if (eq)  result = 0;
            if (less)  result = -1;
            if (greater)  result = 1;
            if (!asc) {
                result = -result;
            }            
            return result;

    }

    sort(list:Array<any>) : Array<any> {
        
        return list.sort((a, b)=> {
            var result = 0;
            this.sortFields.forEach(item => {
                var tmp = this.compare(item.name, item.asc, a, b);
                if (tmp != 0)
                    result = tmp;
                
            })
            return result;
        });
    }
}