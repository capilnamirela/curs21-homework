import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializareAplicatieComponent } from './initializare-aplicatie.component';

describe('InitializareAplicatieComponent', () => {
  let component: InitializareAplicatieComponent;
  let fixture: ComponentFixture<InitializareAplicatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitializareAplicatieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitializareAplicatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
