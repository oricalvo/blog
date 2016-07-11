"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TabsetComponent = (function () {
    function TabsetComponent() {
        this.tabs = [];
        this.activeTabIndex = -1;
    }
    TabsetComponent.prototype.ngOnInit = function () {
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        if (this.tabs.length == 1) {
            tab.isActive = true;
            this.activeTabIndex = 0;
        }
    };
    TabsetComponent.prototype.ngOnChanges = function (args) {
        console.log("ngOnChanges", args);
        if (args.activeTabIndex) {
            console.log("  activeTabIndex changed to: " + this.activeTabIndex);
            console.log("  tabs count is: " + this.tabs.length);
            if (this.activeTabIndex === undefined || this.activeTabIndex >= this.tabs.length) {
                console.log("  activeTabIndex is invalid. Reverting to " + (this.tabs.length - 1));
                this.activeTabIndex = this.tabs.length - 1;
            }
            else {
                this.select(this.tabs[this.activeTabIndex]);
            }
        }
    };
    TabsetComponent.prototype.select = function (tab) {
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var tab_1 = _a[_i];
            tab_1.isActive = false;
        }
        tab.isActive = true;
    };
    TabsetComponent.prototype.onClick = function (tab) {
        this.select(tab);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TabsetComponent.prototype, "activeTabIndex", void 0);
    TabsetComponent = __decorate([
        core_1.Component({
            selector: 'tabset',
            template: "<ul>\n                    <li *ngFor=\"let tab of tabs\" (click)=\"onClick(tab)\">Tab {{tab.title}}</li>\n               </ul>\n               <ng-content></ng-content>",
            styles: [require("./tabset.css!text")],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], TabsetComponent);
    return TabsetComponent;
}());
exports.TabsetComponent = TabsetComponent;
var TabComponent = (function () {
    function TabComponent(tabset) {
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "title", void 0);
    TabComponent = __decorate([
        core_1.Component({
            selector: 'tab',
            template: "<div>\n                    <div class=\"content\" [ngClass]=\"{'active': isActive}\">\n                        <ng-content></ng-content>\n                    </div>\n               </div>",
        }), 
        __metadata('design:paramtypes', [TabsetComponent])
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;
exports.TabDirectives = [TabsetComponent, TabComponent];
//# sourceMappingURL=tabset.js.map