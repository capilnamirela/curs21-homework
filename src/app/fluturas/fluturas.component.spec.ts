import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluturasComponent } from './fluturas.component';

describe('FluturasComponent', () => {
  let component: FluturasComponent;
  let fixture: ComponentFixture<FluturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluturasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FluturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
