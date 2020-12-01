import { SettingBoxComponent } from './test-modules/setting-box/setting-box.component';
import { ClocksSettingComponent } from './test-modules/clocks-setting/clocks-setting.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguageComponent } from './test-modules/language-i18n/language.component';
import { RightToLeftComponent } from './right-to-left/right-to-left.component';

import {  Component, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxAccordionModule,
         DxSelectBoxModule,
         DxMenuModule,
         DxTreeViewModule,
         DxTemplateModule } from 'devextreme-angular';

import { DxTextBoxModule } from 'devextreme-angular';
import { NvLanguageComponent } from './shared/nv-language/nv-language.component';
import { TextBoxRtlComponent } from './text-box-rtl/text-box-rtl.component';
import { DatePipeComponent } from './test-modules/date-pipe/date-pipe.component';
import { LtrDevExtremeComponent } from './test-modules/ltr-dev-extreme/ltr-dev-extreme.component';
import { AnalogClockComponent } from './test-modules/analog-clock/analog-clock.component';
import { DigitalClockComponent } from './test-modules/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    RightToLeftComponent,
    LtrDevExtremeComponent,
    NvLanguageComponent,
    TextBoxRtlComponent,
    DatePipeComponent,
    AnalogClockComponent,
    DigitalClockComponent,
    ClocksSettingComponent,
    SettingBoxComponent
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