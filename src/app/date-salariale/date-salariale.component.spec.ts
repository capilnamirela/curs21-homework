import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSalarialeComponent } from './date-salariale.component';

describe('DateSalarialeComponent', () => {
  let component: DateSalarialeComponent;
  let fixture: ComponentFixture<DateSalarialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateSalarialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateSalarialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
