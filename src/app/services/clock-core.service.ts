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
    setInterval(() => {
      const currentTime = new Date();
      this.setSecond(currentTime.getSeconds());
      this.setMinute(currentTime.getMinutes());
      this.setHour(currentTime.getHours());
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

   setSecond(second: number): void {
     this.secondSubject.next(second);
   }
   setMinute(minute: number): void {
     this.minuteSubject.next(minute);
   }
   setHour(hour: number): void {
     this.hourSubject.next(hour);
   }

}
