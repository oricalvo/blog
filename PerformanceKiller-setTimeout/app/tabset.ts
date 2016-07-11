import {Component, ViewEncapsulation, Input, ChangeDetectionStrategy} from '@angular/core';
import {AppComponent} from "./app";

@Component({
    selector: 'tabset',
    template: `<ul>
                    <li *ngFor="let tab of tabs" (click)="onClick(tab)">Tab {{tab.title}}</li>
               </ul>
               <ng-content></ng-content>`,
    styles: [require("./tabset.css!text")],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsetComponent {
    private tabs: TabComponent[];
    @Input() activeTabIndex: number;

    constructor() {
        this.tabs = [];
        this.activeTabIndex = -1;
    }

    ngOnInit() {
    }

    addTab(tab: TabComponent) {
        this.tabs.push(tab);

        if(this.tabs.length == 1) {
            tab.isActive = true;
            this.activeTabIndex = 0;
        }
    }

    ngOnChanges(args) {
        console.log("ngOnChanges", args);

        if(args.activeTabIndex) {
            console.log("  activeTabIndex changed to: " + this.activeTabIndex);
            console.log("  tabs count is: " + this.tabs.length);
            if(this.activeTabIndex===undefined || this.activeTabIndex >= this.tabs.length) {
                console.log("  activeTabIndex is invalid. Reverting to " + (this.tabs.length-1));
                this.activeTabIndex = this.tabs.length - 1;
            }
            else {
                this.select(this.tabs[this.activeTabIndex]);
            }
        }
    }

    select(tab: TabComponent) {
        for(let tab of this.tabs) {
            tab.isActive = false;
        }

        tab.isActive = true;
    }

    private onClick(tab: TabComponent) {
        this.select(tab);
    }
}

@Component({
    selector: 'tab',
    template: `<div>
                    <div class="content" [ngClass]="{'active': isActive}">
                        <ng-content></ng-content>
                    </div>
               </div>`,
})
export class TabComponent {
    isActive: boolean;
    @Input() title: string;

    constructor(private tabset: TabsetComponent) {
        this.tabset.addTab(this);
    }
}

export var TabDirectives = [TabsetComponent, TabComponent];
