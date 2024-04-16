import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService, GroupService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import {
    PdfStandardFont,
    PdfFontFamily,
    PdfFontStyle,
  } from '@syncfusion/ej2-pdf-export';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService, GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' 
    [allowGrouping]='true' [groupSettings]='groupOptions' (toolbarClick)='toolbarClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public groupOptions?: object;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
        this.groupOptions = { columns: ['ShipCity'] };
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            const pdfExportProperties: PdfExportProperties = {
                theme: {
                    header: {
                        font: new PdfStandardFont(
                          PdfFontFamily.TimesRoman,
                          11,
                          PdfFontStyle.Bold
                        ),
                        fontColor: '#000080',
                        bold: true,
                        border: { color: '#5A5A5A', dashStyle: 'Solid' },
                      },
                      caption: { 
                        font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9),
                        fontColor: '#0B6623',
                        bold: true, },
                      record: { 
                        font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10),
                        fontColor: '#B22222',
                        bold: true, },
                }
            };
            (this.grid as GridComponent).pdfExport(pdfExportProperties);
        }
    }
}



