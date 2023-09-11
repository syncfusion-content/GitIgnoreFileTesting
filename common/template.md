---
layout: post
title: Angular Templates | Syncfusion
description: Learn everything there is to know about templates, including an example in the Angular components of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Syncfusion Angular Components

Syncfusion Angular components are rendered with a pre-defined layout or structure that is used to define how the component should be rendered on the user interface. The user wants to customize the appearance of the component and add functionality that is specific to the needs of the application. Syncfusion Angular components have the option to achieve this using template support.

This template support can be achieved using the Angular ng template. It is a way to define a reusable template that can be used across the application. It allows the user to create a template with a specific structure and logic and then use it multiple times throughout the application without repeating the same code.

A template is defined in Angular by using the `<ng-template>` tag within the corresponding component, and it can be given along with the component template name (template) using the # symbol, which can be used to reference the template. The template can include any valid HTML and Angular template syntax, such as directives, bindings, and components.

To access the component data source inside the template, use the `let-data` attribute in the template. Refer to the below code example.

```html
<ng-template #template let-data>
  <div class="template">{{data.ShipCountry}}</div>
</ng-template>
```

For example, the Grid component is shown below with custom template.

```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
        <ejs-grid #grid [dataSource]='data'>
            <e-columns>
                <e-column field='OrderID' headerText='OrderID' width='100'></e-column>
                <e-column field='CustomerID' headerText='CustomerID' width='100'></e-column>
                <e-column field='ShipCountry' headerText='ShipCountry' width='100'>
                    <ng-template #template let-data>
                        <div class="template">{{data.ShipCountry}}</div>
                    </ng-template>
                </e-column>
            </e-columns>
        </ejs-grid>
    </div>`
});

export class AppComponent implements OnInit {

    public data: object[];
    ngOnInit(): void {
        this.data = [
            { OrderID: 10248, CustomerID: 'VINET', ShipCountry: 'France' },
            { OrderID: 10249, CustomerID: 'TOMSP', ShipCountry: 'Germany' },
            { OrderID: 10250, CustomerID: 'HANAR', ShipCountry: 'Brazil' }
        ];
    }
};
```