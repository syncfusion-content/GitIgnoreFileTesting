import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
        <ejs-grid #grid [dataSource]="data" allowPaging="true" 
        [selectionSettings]="selectionOptions">
        <e-columns>
            <e-column type="checkbox" width="120" >
                <ng-template #headerTemplate>
                </ng-template>
            </e-column>        
            <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right">
            </e-column>
            <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
            <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" 
            textAlign="Right"></e-column>
            <e-column field="Freight" headerText="Freight" width="120" format="C2" 
            textAlign="Right"></e-column>
            <e-column field="ShippedDate" headerText="Shipped Date" width="130" 
            format="yMd" textAlign="Right"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
        </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple' };
  }

}
