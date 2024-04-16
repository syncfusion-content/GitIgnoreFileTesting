import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `<button ej-button id='restore' (click)='clickHandler()'>Restore to initial state</button>
               <ejs-grid #grid id="Grid" [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' [allowFiltering]='true'
           height='210px' (actionBegin)='actionHandler($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [FilterService, PageService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    clickHandler() {
        (this.grid as any).enablePersistence = false;
        window.localStorage.setItem("gridGrid", "");
        (this.grid as any).destroy();
        //reloads the page
        location.reload();
    }
    actionHandler(args: any) {
    }
}
