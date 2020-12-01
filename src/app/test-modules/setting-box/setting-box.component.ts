import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-setting-box',
  templateUrl: './setting-box.component.html',
  styleUrls: ['./setting-box.component.scss']
})
export class SettingBoxComponent implements OnInit {
  @Input() hour: number;
  @Input() minute: number;
  @Input() second: number;
  
  @Output() addHourClick = new EventEmitter<boolean>();
  @Output() addMinusClick = new EventEmitter<boolean>();
  @Output() addSecondClick = new EventEmitter<boolean>();
  @Output() minusHourClick = new EventEmitter<boolean>();
  @Output() minusMinusClick = new EventEmitter<boolean>();
  @Output() minusSecondClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddHourClick(): void {
    this.addHourClick.emit();

  }
  onAddMinuteClick(): void {
    this.addMinusClick.emit();

  }
  onAddSecondClick(): void {
    this.addSecondClick.emit();

  }
  onMinusHourClick(): void {
    this.minusHourClick.emit();

  }
  onMinusMinuteClick(): void {
    this.minusMinusClick.emit();

  }
  onMinusSecondClick(): void {
    this.minusSecondClick.emit();

  }


}
