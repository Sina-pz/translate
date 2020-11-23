import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeAr from '@angular/common/locales/ar';
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeDe, 'ar');

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.scss']
})
export class DatePipeComponent implements OnInit {

  todayNumber: number = Date.now();
  todayDate: Date = new Date();

  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();

  constructor() {
    // this.todayDateSecond = this.todayDate.getSeconds();
    // this.todayDateMinute = this.todayDate.getMinutes();
    // this.todayDateHour = this.todayDate.getHours();
   }

  ngOnInit(): void {
  }

}
