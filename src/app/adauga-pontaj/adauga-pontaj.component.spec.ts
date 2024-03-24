import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaPontajComponent } from './adauga-pontaj.component';

describe('AdaugaPontajComponent', () => {
  let component: AdaugaPontajComponent;
  let fixture: ComponentFixture<AdaugaPontajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdaugaPontajComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdaugaPontajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
