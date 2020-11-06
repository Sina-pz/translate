import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Test';
  public rtlEnabled = false;

  constructor() { }

  public selectArabic(value: boolean) {
    this.rtlEnabled = value;
  }

}
