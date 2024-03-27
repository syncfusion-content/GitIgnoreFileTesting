

import { Component, OnInit,ViewChild } from '@angular/core';
import { formatData } from './datasource';
 
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='orderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='orderName' headerText='Order Name' textAlign='Left' width=180></e-column>
                        <e-column field='unitPrice' headerText='Unit Price' textAlign='Right' format='C' type='number' width=80></e-column>
                        <e-column field='price' headerText='Price' textAlign='Right' format='P2' type='number' width=80></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' format='N' type='number' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
   
    ngOnInit(): void {
        this.data = formatData;
    }
}



