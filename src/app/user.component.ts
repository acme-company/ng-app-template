import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ViewChild } from '@angular/core';
import { User } from "./user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: '[userDlg]',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    @Input() user: User;
    @Input() title: string;
    @Output() onOk: EventEmitter<User>;
    @ViewChild('content') content;
    myForm: FormGroup;

    constructor(private fb: FormBuilder, private ngbModal: NgbModal) {
        this.user = { userId: 0, firstName: '', lastName: '' };
        this.onOk = new EventEmitter<User>();
    }

    ngOnInit() {
    }

    @HostListener('click', ['$event']) onclick(event) {
      
        this.open(this.content);
    }

    open(content: any) {
        this.myForm = this.fb.group({
            firstName: [this.user.firstName, Validators.required],
            lastName: [this.user.lastName, Validators.required]
        });

        this.ngbModal.open(content).result.then((result) => {
            if (this.myForm.valid) {
                this.onOk.next(Object.assign({ userId: this.user.userId },this.myForm.value));
                
            }
        }, (reason) => {

        });
    }

}