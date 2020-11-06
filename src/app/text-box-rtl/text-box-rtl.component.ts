import { Language } from './../models/language';
import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Country } from '../models/country';


@Component({
  selector: 'app-text-box-rtl',
  templateUrl: './text-box-rtl.component.html',
  styleUrls: ['./text-box-rtl.component.scss']
})
export class TextBoxRtlComponent {

  displayExpr = 'nameEn';
  //rtlEnabled = false;
  private _rtlEnabled = false;
  textValue = 'text';
  textBoxTitle = 'Text Box';
  selectBoxTitle = 'Select Box';
  europeanUnion: Country[];
  @Input() set rtlEnabled(value: boolean) {
    let isRTL = value;
    this.displayExpr = isRTL ? 'nameAr' : 'nameEn';
    this._rtlEnabled = isRTL;
    this.textValue = isRTL ? 'نص' : 'text';
    this.textBoxTitle = isRTL ? 'مربع الكتابة' : 'Text Box';
    this.selectBoxTitle = isRTL ? 'حدد المربع' : 'Select Box';
  }

  get rtlEnabled(): boolean {
    return this._rtlEnabled;
  }

  constructor(service: AppService) {
    this.europeanUnion = service.getCountries();
  }

}
