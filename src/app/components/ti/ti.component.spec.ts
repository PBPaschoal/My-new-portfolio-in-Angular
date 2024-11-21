import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiComponent } from './ti.component';

describe('TiComponent', () => {
  let component: TiComponent;
  let fixture: ComponentFixture<TiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
