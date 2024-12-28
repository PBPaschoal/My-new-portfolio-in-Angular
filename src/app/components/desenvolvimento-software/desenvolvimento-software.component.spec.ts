import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoSoftwareComponent } from './desenvolvimento-software.component';

describe('DesenvolvimentoSoftwareComponent', () => {
  let component: DesenvolvimentoSoftwareComponent;
  let fixture: ComponentFixture<DesenvolvimentoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesenvolvimentoSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesenvolvimentoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
