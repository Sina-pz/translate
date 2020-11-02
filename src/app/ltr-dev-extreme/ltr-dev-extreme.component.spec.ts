import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtrDevExtremeComponent } from './ltr-dev-extreme.component';

describe('LtrDevExtremeComponent', () => {
  let component: LtrDevExtremeComponent;
  let fixture: ComponentFixture<LtrDevExtremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtrDevExtremeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtrDevExtremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
