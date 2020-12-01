import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { ClockCoreService } from './../../services/clock-core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clocks-setting',
  templateUrl: './clocks-setting.component.html',
  styleUrls: ['./clocks-setting.component.scss']
})
export class ClocksSettingComponent implements OnInit {

  public hour$: Observable<number>;
  public minute$: Observable<number>;
  public second$: Observable<number>;

  constructor(private logic: ClockCoreService) {
    this.hour$ = this.logic.hour$;
    this.minute$ = this.logic.minute$;
    this.second$ = this.logic.second$;
   }

  ngOnInit(): void {
  }
  onAddHourClick(): void {
    console.log("hour");

    this.hour$.subscribe(hour =>
      this.logic.setHour(hour + 1)
    );


  }
  onAddMinuteClick(): void {
    console.log("min");
    this.minute$.subscribe(minute =>
      this.logic.setMinute(minute + 1)
    );

  }
  onAddSecondClick(): void {
    console.log("sec");
    this.second$.subscribe(second =>
      this.logic.setSecond(second + 1)
    );
  }
  onMinusHourClick(): void {
    console.log("hour");
    this.hour$.subscribe(hour =>
      this.logic.setHour(hour - 1)
    );

  }
  onMinusMinuteClick(): void {
    console.log("minu");
    this.minute$.subscribe(minute =>
      this.logic.setMinute(minute - 1)
    );

  }
  onMinusSecondClick(): void {
    console.log("second");
    this.second$.subscribe(second =>
      this.logic.setSecond(second - 1)
    );

  }

}
