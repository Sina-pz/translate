import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';
import { RightToLeftComponent } from './right-to-left/right-to-left.component';

import {  Component, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxAccordionModule,
         DxSelectBoxModule,
         DxMenuModule,
         DxTreeViewModule,
         DxTemplateModule } from 'devextreme-angular';
import { LtrDevExtremeComponent } from './ltr-dev-extreme/ltr-dev-extreme.component';
import { DxTextBoxModule } from 'devextreme-angular';
import { NvLanguageComponent } from './shared/nv-language/nv-language.component';
import { TextBoxRtlComponent } from './text-box-rtl/text-box-rtl.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    RightToLeftComponent,
    LtrDevExtremeComponent,
    NvLanguageComponent,
    TextBoxRtlComponent
  ],
  imports: [
    BrowserModule,
    DxAccordionModule,
    DxSelectBoxModule,
    DxMenuModule,
    DxTreeViewModule,
    DxTemplateModule,
    DxTextBoxModule,
    BrowserModule,
    DxSelectBoxModule,
    DxTextBoxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);