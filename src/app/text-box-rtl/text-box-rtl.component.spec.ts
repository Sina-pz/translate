import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxRtlComponent } from './text-box-rtl.component';

describe('TextBoxRtlComponent', () => {
  let component: TextBoxRtlComponent;
  let fixture: ComponentFixture<TextBoxRtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBoxRtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxRtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
