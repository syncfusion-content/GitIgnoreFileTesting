---
layout: post
title: Angular universal in Angular Frameworks and feature component | Syncfusion
description: Learn here all about Angular universal in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Angular universal 
documentation: ug
domainurl: ##DomainURL##
---

# Angular Universal: Server-side Rendering in Angular Frameworks

Angular is a popular client-side web development framework, but by default, it runs only on the client-side. However, many web tools are designed for server-side frameworks such as Asp.Net WebForms and Asp.Net MVC. To bridge this gap, Angular provides a feature called Angular Universal that allows for server-side rendering (SSR) of Angular applications.

## Introduction

Angular Universal allows for server-side rendering of Angular applications. It is a technique for rendering Angular components on the server and sending the pre-rendered HTML to the client, where JavaScript takes over and adds interactivity. This has several benefits, such as improved SEO, faster load times, and better accessibility.

## What is Angular Universal?

Angular Universal is a technology that allows you to run Angular applications on the server side. This means that the application's code is executed on the server, and the resulting HTML is sent to the client's browser. The JavaScript then takes over and adds interactivity to the application.

For more information, refer to the [Angular Universal](https://github.com/angular/universal) repository.

## Syncfusion Angular UI Components in Angular Universal

Syncfusion Angular UI Components also supports the Angular Universal. The [Universal-Starter](https://github.com/angular/universal-starter) is a great tool that allows you to create a universal application without any hassle.

To use Syncfusion Angular UI components in an Angular Universal application, follow these steps:

* Download or clone the starter project from the Universal-Starter repository
* Run `npm install` command to install all required dependencies.
* Follow the [Getting Started](../getting-started/angular-cli/) to add required component and its code changes.
* Run `npm run build:ssr` && `npm run serve:ssr` command to build and serve the application in both prerender and rerender(ssr) mode of the universal.

## See also

* [Getting Started ASP .NET Core with Angular](../getting-started/aspnet-core.md)
* [Getting Started ASP .NET MVC with Angular](../getting-started/aspnet-mvc.md)