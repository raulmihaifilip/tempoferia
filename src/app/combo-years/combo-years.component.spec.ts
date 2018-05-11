import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboYearsComponent } from './combo-years.component';

describe('ComboYearsComponent', () => {
  let component: ComboYearsComponent;
  let fixture: ComponentFixture<ComboYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
