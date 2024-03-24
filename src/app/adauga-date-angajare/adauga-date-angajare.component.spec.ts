import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaDateAngajareComponent } from './adauga-date-angajare.component';

describe('AdaugaDateAngajareComponent', () => {
  let component: AdaugaDateAngajareComponent;
  let fixture: ComponentFixture<AdaugaDateAngajareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdaugaDateAngajareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdaugaDateAngajareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
