import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaDateSalarialeComponent } from './adauga-date-salariale.component';

describe('AdaugaDateSalarialeComponent', () => {
  let component: AdaugaDateSalarialeComponent;
  let fixture: ComponentFixture<AdaugaDateSalarialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdaugaDateSalarialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdaugaDateSalarialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
