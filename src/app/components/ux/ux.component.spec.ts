import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxComponent } from './ux.component';

describe('UxComponent', () => {
  let component: UxComponent;
  let fixture: ComponentFixture<UxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
