import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ReorderService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ReorderService],
standalone: true,
    selector: 'app-root',
    template: `<button ej-button id='reorderSingleCol' (click)='reorderSingleCol()'>Reorder Ship City to Last</button>
    <ejs-grid #grid='' [dataSource]='data' [allowReordering]='true' height='280px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('grid')
    public gridObj?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    reorderSingleCol(): void {
        (this.gridObj as any).reorderColumns('ShipCity','ShipName');
    }
}


