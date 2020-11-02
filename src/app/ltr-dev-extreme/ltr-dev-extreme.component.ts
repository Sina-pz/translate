import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxAccordionModule,
         DxSelectBoxModule,
         DxMenuModule,
         DxTreeViewModule,
         DxTemplateModule } from 'devextreme-angular';
import { AppService } from '../app.service';


import { Continent } from './../models/continent';
import { EuropeCountry } from './../models/europe-country';



@Component({
  selector: 'app-ltr-dev-extreme',
  templateUrl: './ltr-dev-extreme.component.html',
  styleUrls: ['./ltr-dev-extreme.component.scss']
})
export class LtrDevExtremeComponent {
  continents: Continent[];
  europeCountries: EuropeCountry[];
  languages: string[] = [
      "Arabic",
      "English",
      "German",
      "French"  
  ];
  rtlEnabled = false;

  constructor(service: AppService) {
      this.continents = service.getContinents();
      this.europeCountries = service.getEuropeCountries();
  }
  selectLanguage(e) {
      this.rtlEnabled = e.value === this.languages[0];
  }



}
