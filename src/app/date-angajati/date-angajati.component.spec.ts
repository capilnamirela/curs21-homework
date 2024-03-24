import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAngajatiComponent } from './date-angajati.component';

describe('DateAngajatiComponent', () => {
  let component: DateAngajatiComponent;
  let fixture: ComponentFixture<DateAngajatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAngajatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateAngajatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
