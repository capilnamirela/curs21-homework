import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaAngajatComponent } from './adauga-angajat.component';

describe('AdaugaAngajatComponent', () => {
  let component: AdaugaAngajatComponent;
  let fixture: ComponentFixture<AdaugaAngajatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdaugaAngajatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdaugaAngajatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
