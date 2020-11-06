import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nv-language',
  templateUrl: './nv-language.component.html',
  styleUrls: ['./nv-language.component.scss']
})
export class NvLanguageComponent implements OnInit {

  languageSelectBoxValue = 'English';
  @Output()
  languageChange: EventEmitter<boolean> = new EventEmitter();
  languages: string[] = [
    'Arabic',
    'English'
  ];
  languagesInEnglish: string[] = [
    'Arabic',
    'English'
  ];
  languagesInArabic: string[] = [
    'عربى',
    'الإنجليزية'
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public onLanguageChanged(data: any) {
    // this.rtlEnabled = data.value === this.languages[0];
    let isRTL = false;
    if (data.value === this.languagesInArabic[0]) {
      isRTL = true;
      this.languages = this.languagesInArabic;
      this.languageSelectBoxValue = this.languagesInArabic[0];

    } else if (data.value === this.languagesInEnglish[0]) {
      isRTL = true;
      this.languages = this.languagesInArabic;
      this.languageSelectBoxValue = this.languagesInArabic[0];
    } else {

      this.languages = this.languagesInEnglish;

      this.languageSelectBoxValue = this.languagesInEnglish[1];
    }

    this.languageChange.emit(isRTL);

 
  }

}



