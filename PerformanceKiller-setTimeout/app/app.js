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
var _this = this;
var core_1 = require('@angular/core');
var tabset_1 = require('./tabset');
var AppComponent = (function () {
    function AppComponent(appRef) {
        console.log(appRef);
        this.nextTabId = 1;
        this.tabs = [
            { id: this.nextTabId++, title: "1" },
            { id: this.nextTabId++, title: "2" }
        ];
        var originalTick = appRef.tick;
        appRef.tick = function () {
            console.log("tick");
            return originalTick.apply(this, arguments);
        };
    }
    AppComponent.prototype.addTab = function () {
        var _this = this;
        this.tabs.push({
            id: this.nextTabId++, title: "3"
        });
        setTimeout(function () {
            _this.activeTabIndex = _this.tabs.length - 1;
        }, 0);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: require("./app.html!text"),
            directives: [tabset_1.TabDirectives],
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
addTab();
{
    this.tabs.push({
        id: this.nextTabId++, title: "3"
    });
    setTimeout(function () {
        _this.activeTabIndex = _this.tabs.length - 1;
    }, 0);
}
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map