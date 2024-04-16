import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DialogModule } from '@syncfusion/ej2-angular-popups'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel, ISelectedCell } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DialogModule 
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
        <div style="padding: 20px 0px">
          <button ejs-button class="sample" (click)="showSelectedIndexes()">
          Show Selected Cell Indexes</button>
        </div>
        <ejs-grid #grid [dataSource]="data" allowPaging="true" 
        [selectionSettings]="selectionOptions" [pageSettings]="pageOptions">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" 
            textAlign="Right" width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120">
            </e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="130">
            </e-column>
            <e-column field="Freight" headerText="Freight" format="C2" width="100">
            </e-column>
          </e-columns>
        </ejs-grid>
        <ejs-dialog #dialogComponent [header]="'Selected Cell Indexes'" [content]="dialogContent"
          [visible]="dialogVisible" (close)="dialogClose()" showCloseIcon="true" width="350px"
          [position]='{ X: 300, Y: 100 }'>
          <ng-template #dialogContent>
            <ng-container>
              <div>
                <p><b>Selected Cell Indexes:</b></p>
                <ul>
                  <li *ngFor="let cellIndex of selectedCellIndexes">
                    Row: {{ cellIndex.rowIndex }}, cellIndex: {{ cellIndex.cellIndexes }}
                  </li>
                </ul>
              </div>
            </ng-container>
          </ng-template>
        </ejs-dialog>`
})

export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public dialogVisible: boolean = false;
  public selectedCellIndexes: ISelectedCell[] = [];
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode:'Cell', type: 'Multiple', persistSelection: true };
    this.pageOptions = { pageSize: 5 };
  }
  showSelectedIndexes(): void {
    this.selectedCellIndexes = (this.grid as GridComponent).getSelectedRowCellIndexes();
    if (this.selectedCellIndexes.length > 0) {    
      this.dialogVisible = true;
    }
  }
  dialogClose(): void {
    this.dialogVisible = false;
  }
}