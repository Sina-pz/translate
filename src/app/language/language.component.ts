import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public rtlEnabled = false;
  languages: string[] = [
    "Arabic",
    "English",
    "German",
    "French"  
];
  constructor() { }

  ngOnInit(): void {
  }
  selectLanguage(e) {
    this.rtlEnabled = e.value === this.languages[0];
}
}
