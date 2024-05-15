# Lightning Web Component

## Introduction

This tutorial offers a straightforward guide to creating Lightning Web Components (LWC) for use in Salesforce systems. We will start with the necessary preparations to set up the Development Environment, followed by exploring the basic structure using a simple example named "Simple." Throughout the tutorial, we will deploy the components to a Salesforce testing environment and integrate them into a page.

## What is Lightning Web Components (LWC)?

Lightning Web Components (LWC) represents Salesforce's innovative approach to lightweight web frameworks based on industry standards. It incorporates specialized Salesforce services into the core stack, enhancing development with essential features. These include the Lightning Data Service, which offers declarative access to Salesforce data and metadata, along with efficient data caching and synchronization. Additionally, LWC leverages the Base Lightning Components—an extensive suite of more than 70 UI elements, each developed as custom elements for seamless integration into applications. With Lightning Web Components, Salesforce developers can harness the power of modern web standards while leveraging a robust set of specialized tools tailored for building dynamic, data-driven applications.  
[Reference:Introducing Lightning Web Components](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components)

## Before You Start

> Preparation: Ensure the Following Software is Installed

#### 1.Install Java JDK

The Apex language server is provided as part of the Salesforce Apex extension for VS Code and depends on the Java Development Kit (JDK). It requires installing JDK version 17 (recommended).  
[Java Setup Guide](https://developer.salesforce.com/tools/vscode/en/vscode-desktop/java-setup?_ga=2.25652349.1321670844.1714956482-1049736365.1714209840)

#### 2.Install Salesforce CLI

[Salesforce CLI Download](https://developer.salesforce.com/tools/salesforcecli?_ga=2.36881120.1321670844.1714956482-1049736365.1714209840)

#### 3.Install Visual Studio Code and Salesforce CLI Integration Extension

[Visual Studio Code Download](https://code.visualstudio.com/download)

## Creating the First LWC Project and Component

### Create Project Folder

1. open your VSCode.
2. Navigate to the desired project directory.
3. Ctrl + P and Run: _SFDX: Create project_.
4. Choose the standard template.
5. Enter the project name.

### Create LWC Component

> Create a new LWC component

1. Make sure you are in the project directory.
2. Ctrl + P and Run: _SFDX: Create Lightning Web Component_.
3. Enter the component name.
4. Choose the storage location.

   \*The default storage location for LWC components is: _[folder name]\force-app\main\default\lwc\[component name]_.

## LWC Component Structure

> The component consists of three main parts:

### HTML (simple.html)

```html
<template>
  <!-- lightning-card is a built-in template -->
  <lightning-card if:true="{ready}">
    <div id="display" class="slds-m-around_medium">
      <!-- Use curly braces to access variables from JS -->
      <div>Name: {name}</div>
      <div>Description: {description}</div>
      <lightning-badge label="{tag1}"></lightning-badge>
      <lightning-badge label="{tag2}"></lightning-badge>
      <lightning-badge label="{tag3}"></lightning-badge>
      <div><img src="{pictureUrl}" /></div>
    </div>
  </lightning-card>
</template>
```

### JavaScript (simple.js)

```js
import { LightningElement } from "lwc";

export default class simple extends LightningElement {
  // Variables used in HTML are declared here
  name = "sam";
  description = "Description";
  pictureUrl = "YourImageUrl";
  tag1 = "tag";
  tag2 = "tag";
  tag3 = "tag";
  ready = true;
}
```

### Metadata (simple.js-meta.xml)

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion> <!-- API version, usually default is fine -->
    <isExposed
  >true</isExposed> <!-- Whether this component is exposed in Salesforce -->
    <targets> 
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>
```

## Additional Information

1. More about settings related to simple.js-meta.xml  
   [XML Configuration File Elements](https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags?-ga=2.24250490.1321670844.1714956482-1049736365.1714209840.html)

2. Many basic templates for Lightning Web Components provided by Salesforce  
   [Built-in Lightning Component Modules](https://developer.salesforce.com/docs/component-library/overview/components)  
   _Includes Aura Components and Lightning Web Components. Use the filter options: Click on Filters → Programming Models → Lightning Web Components._

## Connect Visual Studio Code to Salesforce Organization

1. Make sure you are in the project directory.
2. Ctrl + P and Run: _SFDX: Authorize an Org_.
3. Choose the connection method, In here we select "Project Default", open a new tab, and choose your login account.
4. Authentication Successful.  
   _If you don't have a Salesforce testing environment yet, please register first._  
   [Sign up for your Salesforce Developer Edition](https://developer.salesforce.com/signup)

## Deploy LWC to Salesforce Organization

### Discover two convenient methods for deploying Lightning Web Components (LWC) in Salesforce:

1. Ctrl + P and Run: _SFDX: Deploy This Source to Org_
2. Right-click on the component folder in VS Code and select _SFDX: Deploy Source to Org_.

### Add Custom LWC to a Page

1. Navigate to the object page where you wish to incorporate the "simple" component and click "Edit Page."
2. In the left navigation pane under "Custom Components," locate the uploaded "simple" component.
3. Drag the component to your desired location on the page.
4. Save the changes and activate the page to begin using the component effectively.

## Ending

We have successfully created our first Lightning Web Component in our own testing environment.Thank you for exploring this Lightning Web Component tutorial. Feel free to contribute, provide feedback, or raise issues on GitHub. Happy coding!
