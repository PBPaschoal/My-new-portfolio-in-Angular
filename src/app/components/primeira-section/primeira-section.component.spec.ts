import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraSectionComponent } from './primeira-section.component';

describe('PrimeiraSectionComponent', () => {
  let component: PrimeiraSectionComponent;
  let fixture: ComponentFixture<PrimeiraSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeiraSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiraSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
