import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvLanguageComponent } from './nv-language.component';

describe('NvLanguageComponent', () => {
  let component: NvLanguageComponent;
  let fixture: ComponentFixture<NvLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
