import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoRagnarokComponent } from './projeto-ragnarok.component';

describe('ProjetoRagnarokComponent', () => {
  let component: ProjetoRagnarokComponent;
  let fixture: ComponentFixture<ProjetoRagnarokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoRagnarokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoRagnarokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
