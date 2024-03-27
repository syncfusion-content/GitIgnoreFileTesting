import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ReactiveFormsModule ,  FormsModule} from '@angular/forms';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule, DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        ButtonModule,
        DropDownListAllModule,
        ReactiveFormsModule,
        FormsModule,
        NumericTextBoxAllModule,
        DatePickerAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService,
                EditService,
                ToolbarService]
})
export class AppModule { }