import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule
    ],

providers: [FilterService, PageService,CheckBoxSelectionService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
            type:'Excel',
            columns: [
                {
                    field: 'CustomerID',
                    matchCase: false,
                    operator: 'startswith',
                    predicate: 'or',
                    value: 'VINET',
                },
                {
                    field: 'CustomerID',
                    matchCase: false,
                    operator: 'startswith',
                    predicate: 'or',
                    value: 'HANAR',
                },
                {
                    field: 'OrderID',
                    matchCase: false,
                    operator: 'lessThan',
                    predicate: 'or',
                    value: 10250,
                },
                {
                    field: 'OrderID',
                    matchCase: false,
                    operator: 'notEqual',
                    predicate: 'or',
                    value: 10262,
                },
            ]
        };
    }
}



