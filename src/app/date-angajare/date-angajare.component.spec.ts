import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAngajareComponent } from './date-angajare.component';

describe('DateAngajareComponent', () => {
  let component: DateAngajareComponent;
  let fixture: ComponentFixture<DateAngajareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAngajareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateAngajareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
