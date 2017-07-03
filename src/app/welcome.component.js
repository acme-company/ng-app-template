var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { widgets } from './data/widgets';
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.wip = widgets.filter(function (t) { return t.title == 'Load Work-In-Progress'; })[0];
        var tmp = widgets.filter(function (t) { return !t.custom; });
        this.leftWidgets = tmp.filter(function (t) { return t.category == 'left'; });
        this.centerWidgets = tmp.filter(function (t) { return t.category == 'center'; });
        this.rightWidgets = tmp.filter(function (t) { return t.category == 'right'; });
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Component({
        selector: 'welcome',
        templateUrl: 'welcome.component.html'
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);
export { WelcomeComponent };
//# sourceMappingURL=welcome.component.js.map