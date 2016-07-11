import {Component, ApplicationRef} from '@angular/core';
import {TabsetComponent, TabComponent, TabDirectives} from './tabset';

@Component({
    selector: 'my-app',
    template: require("./app.html!text"),
    directives: [TabDirectives],
})
export class AppComponent {
    tabs: Tab[];
    activeTabIndex: number;
    nextTabId: number;

    constructor(appRef: ApplicationRef) {
        console.log(appRef);

        this.nextTabId = 1;
        this.tabs = [
            {id:this.nextTabId++, title: "1"},
            {id:this.nextTabId++, title: "2"}
        ];

        var originalTick = appRef.tick;
        appRef.tick = function() {
            console.log("tick");

            return originalTick.apply(this, arguments);
        }
    }

    addTab() {
        this.tabs.push({
            id:this.nextTabId++, title: "3"
        });

        setTimeout(() => {
            this.activeTabIndex = this.tabs.length - 1;
        }, 0);
    }
}

interface Tab {
    id: number;
    title: string;
}

addTab() {
    this.tabs.push({
        id:this.nextTabId++, title: "3"
    });

    setTimeout(() => {
        this.activeTabIndex = this.tabs.length - 1;
    }, 0);
}

export class AppComponent {
}
