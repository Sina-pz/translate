import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksSettingComponent } from './clocks-setting.component';

describe('ClocksSettingComponent', () => {
  let component: ClocksSettingComponent;
  let fixture: ComponentFixture<ClocksSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClocksSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
