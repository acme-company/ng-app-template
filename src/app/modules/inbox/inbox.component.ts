import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    templateUrl: 'inbox.component.html',
    styleUrls: [ 'inbox.component.scss']
})
export class InboxComponent {
    constructor(title:Title) {
        title.setTitle("Inbox");
    }
}