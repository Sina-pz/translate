import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightToLeftComponent } from './right-to-left.component';

describe('RightToLeftComponent', () => {
  let component: RightToLeftComponent;
  let fixture: ComponentFixture<RightToLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightToLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightToLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
