import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, Column } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' (pdfExportComplete)='pdfExportComplete()' (toolbarClick)='toolbarClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
                        <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            ((this.grid as GridComponent).columns[1] as Column).visible = true;
            ((this.grid as GridComponent).columns[2] as Column ).visible = false;
            (this.grid as GridComponent).pdfExport();
        }
    }

    pdfExportComplete(): void {
        ((this.grid as GridComponent).columns[1] as Column).visible = false;
        ((this.grid as GridComponent).columns[2] as Column).visible = true;
    }
}



