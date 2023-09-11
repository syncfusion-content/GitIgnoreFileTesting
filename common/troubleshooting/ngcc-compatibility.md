---
layout: post
title: Troubleshoot in Angular Common control | Syncfusion
description: Learn here all about Troubleshoot in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Compatibility Issues with Syncfusion Angular Packages and Latest Angular CLI

This article offers solutions to problems that you can run into while utilising the Syncfusion Angular UI components.

## Are Syncfusion Angular packages compatible with the latest Angular CLI?

Yes, Syncfusion Angular IVY packages are fully compatible with the latest Angular CLI.

## If Syncfusion Angular packages are compatible with Latest Angular CLI, what version should we prepare?

It is recommended to use version 21.1.39 or the latest available version of the Syncfusion Angular packages. For more information check that the [version compatibility](../../upgrade/version-compatibility/).

## How can I check the compatibility of Syncfusion Angular packages with a specific version of Angular CLI?

Syncfusion provides a compatibility [documentation](../../upgrade/version-compatibility/) that outlines the supported versions of Angular CLI.

## What compatibility issues were encountered while using Syncfusion Angular NGCC packages with the latest version of Angular CLI? 

Some of the new features included in Angular CLI 16 were incompatible with the NGCC component package, such as the modified Ivy rendering engine. An error notice appeared as a result, claiming that Angular Ivy is incompatible with the library (@syncfusion/ej2-angular-grids) that declares GridModule.

## Where can I find more information about this issue? 

More information about the compatibility issue can be found on the official Angular documentation [page](https://angular.io/guide/update-to-version-16#angular-compatibility-compiler-ngcc-has-been-removed).

## What is the cause of the error message encountered during testing? 

The error message encountered during the compile time and suggests that the library (@syncfusion/ej2-angular-grids) which declares GridModule is not compatible with Angular Ivy. This is due to the incompatibility between the NGCC component package and some of the new features introduced in Angular CLI 16.

E> This likely means that the library (@syncfusion/ej2-angular-grids) which declares GridModule has not been processed correctly by ngcc, or is not compatible with Angular Ivy.

## How can I resolve the compatibility issue encountered when using Syncfusion Angular NGCC packages with the latest version of Angular CLI?

One way to resolve the issue is to use IVY compiled [packages](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids) instead of NGCC compiled packages.

## Are there any other ways to resolve the compatibility issue? 

Another way to resolve the issue is to downgrade the version of Angular CLI to a version that is compatible with the NGCC component package. However, this may not be a recommended solution as it may involve downgrading other packages in your project and can lead to compatibility issues with other dependencies.
