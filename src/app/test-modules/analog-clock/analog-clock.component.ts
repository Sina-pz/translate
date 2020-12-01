import { ClockCoreService } from './../../services/clock-core.service';
import { Component, OnInit } from '@angular/core';
import { DxiConstantLineModule, DxiCustomOperationModule } from 'devextreme-angular/ui/nested';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {
  // todayDateSecond: number;
  // todayDateMinute: number;
  // todayDateHour: number;
  secondDegree: number;
  minuteDegree: number;
  hourDegree: number;

  constructor(private logic: ClockCoreService) {

    // setInterval(() => {

    //   const d = new Date();
      // this.todayDateSecond = 6 * d.getSeconds();
      // this.todayDateMinute = 6 * d.getMinutes();
      // this.todayDateHour = 30 * (d.getHours() % 12) + d.getMinutes() / 2;
    // }
    //   , 1000);
  }

  ngOnInit(): void {
    this.logic.second$.subscribe(second => this.fromSecond(second));
    this.logic.minute$.subscribe(minute => this.fromMinute(minute));
    this.logic.hour$.subscribe(hour => this.fromHour(hour));
  }
  fromSecond(second: number): void {
    this.secondDegree = 6 * second;
  }
  fromMinute(minute: number): void {
    this.minuteDegree = 6 * minute;
  }
  fromHour(hour: number): void {
    this.hourDegree = 30 * (hour % 12) + this.minuteDegree / (2 * 6);
  }

}
