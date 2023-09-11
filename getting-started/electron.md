---
layout: post
title: Electron with Angular Getting started component | Syncfusion
description:  Checkout and learn about Electron with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Electron 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular and Electron

This document helps you to create a simple Angular application with `Electron Framework` and `Syncfusion Angular UI components`.

## Prerequisites

Before getting started with the Angular project, make sure you have the following installed on your machine,

* Angular version 6 or later
* TypeScript version 2.6 or later
* Electron CLI version 6.0.10 or later

If you do not have the `Electron CLI` installed, refer to the [`Electron package`](https://www.npmjs.com/package/electron-cli) for instructions on how to install it.

## Setup Angular environment

You can use follow the [Setting up the local environment and workspace](https://angular.io/guide/setup-local).

Install electron framework using the following command.

```bash
npm install -g electron
```

>Note: Here, we are using electron version 6.0.10 to support Angular 6.

>Note: Refer to this [getting started](https://electronjs.org/docs/tutorial/installation) to install electron framework.

## Installing Syncfusion Menu package

Syncfusion packages are distributed on npm under the `@syncfusion` scope. You can find all of the Angular Syncfusion packages [here](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

To install the Menu package, run the following command.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
(or)
npm i @syncfusion/ej2-angular-navigations@ngcc --save
```

## Adding the Menu module

After installing the package, the component modules will be available for you to configure your application. The Syncfusion Angular package provides two different types of ng-Modules.

Import Menu module into Angular application (app.module.ts) from the package `@syncfusion/ej2-angular-navigations`.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Syncfusion menu module from navigations package.
import { MenuModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, MenuModule], // Registering EJ2 Menu Module.
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion Menu component

To add the Syncfusion Menu component to your application, modify the template in the `app.component.ts` file by adding the ejs-menu element and binding it to the menuItems variable.

```typescript
import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Menu. -->
            <ejs-menu [items]='menuItems'></ejs-menu>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'File',
            items: [
                { text: 'Open',  url: 'https://www.google.com/search?q=washing+machine' },
                { text: 'Save' },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        },
        {
            text: 'View',
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ]
        },
        { text: 'Go' },
        { text: 'Help' }
    ];
}
```

## Adding CSS reference

Add Menu component’s styles as given below in `style.css`.

```typescript
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```
## Create main.js file

Create a `main.js` file in the root folder of the project, and add the following code in `main.js` file

```typescript
const { app, BrowserWindow } = require('electron');
let win;
function createWindow () {     
// Create the browser window.
win = new BrowserWindow({ width: 800, height: 600 });
// Load the index.html of the app. 
win.loadFile('./dist/my-app/index.html');
// Open the DevTools.
win.webContents.openDevTools();
// Emitted when the window is closed.
win.on('closed', () => {       
   win = null     
  })
};      
// This method will be called when Electron finish initialization and is ready to create browser windows.   
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => { 
// On macOS, it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q.
if (process.platform !== 'darwin') {
app.quit()
}   
});

app.on('activate', () => {
// On macOS, it is common to re-create a Window in an app when the dock icon is clicked and there are no other windows open.
if (win === null) {
createWindow()
}   
});  
```

## Update index.html

In the `/src/index.html` file, change `<base href="/">` as `<base href="./">`, so that the Electron can able to find the Angular files.

## Update package.json

```typescript
"main":"main.js",
"scripts": { 
    "ng": "ng", 
    "start": "ng serve", 
    "build": "ng build", 
    "test": "ng test", 
    "lint": "ng lint", 
    "e2e": "ng e2e", 
    "electron-build": "ng build --prod", 
    "electron": "electron ." 
}, 
```

Then, include the above code in the `package.json` file.

## Update tsconfig.json

In the `tsconfig.json` file, change the target as demonstrated in the following code sample.

```typescript
"target": "es5"
```

## Running the application

Finally, run the following command line to start the application. The Syncfusion Essential JS 2 menu component will be rendered in the Electron framework.

 ```bash
npm  run electron-build 
 
npm  run electron 
```

>Note: For your convenience, we have prepared an [Angular sample with electron framework](https://github.com/SyncfusionExamples/ej2-angular-electron).


## See also

* [Electron Browser Window](https://www.electronjs.org/docs/latest/api/browser-window)

* [Angular 10 Electron Tutorial](https://www.techiediaries.com/angular-electron/)

* [Build Angular Desktop Apps With Electron Tutorial](https://fireship.io/lessons/desktop-apps-with-electron-and-angular/)

* [Getting started with angular CLI](../getting-started/angular-cli/)
