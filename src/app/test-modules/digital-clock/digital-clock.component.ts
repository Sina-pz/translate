import { Observable } from 'rxjs';
import { ClockCoreService } from './../../services/clock-core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  second$: Observable<number>;
  minute$: Observable<number>;
  hour$: Observable<number>;

  constructor(private logic: ClockCoreService) { }

  ngOnInit(): void {
    this.second$ = this.logic.second$;
    this.minute$ = this.logic.minute$;
    this.hour$ = this.logic.hour$;
  }

}
