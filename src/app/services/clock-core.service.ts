import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockCoreService {
  private secondSubject = new BehaviorSubject(0);
  private minuteSubject  = new BehaviorSubject(0);
  private hourSubject  = new BehaviorSubject(0);

  constructor() {
    this.reset();

    setInterval(() => {
      const newSecond = (this.secondSubject.value + 1) ;
      const newMinute = newSecond === 0 ? ((this.minuteSubject.value + 1)) : this.minuteSubject.value;
      const newHour = newMinute === 0 ? ((this.hourSubject.value + 1) ) : this.hourSubject.value;
      this.setSecond(newSecond);
      this.setMinute(newMinute);
      this.setHour(newHour);
    }
      , 1000);
   }

   public get second$(): Observable<number> {
     return this.secondSubject.asObservable();
   }
   public get minute$(): Observable<number> {
     return this.minuteSubject.asObservable();
   }
   public get hour$(): Observable<number> {
     return this.hourSubject.asObservable();
   }

   reset(): void {
    const currentTime = new Date();
    this.setSecond(currentTime.getSeconds());
    this.setHour(currentTime.getHours());
    this.setMinute(currentTime.getMinutes());
  }

   setSecond(second: number): void {
     this.secondSubject.next((second < 0 ? second + 60 : second) );
   }
   setMinute(minute: number): void {
     this.minuteSubject.next((minute < 0 ? minute + 60 : minute));
   }
   setHour(hour: number): void {
     this.hourSubject.next((hour < 0 ? hour + 24 : hour));
   }

}
