import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeGaleriaComponent } from './youtube-galeria.component';

describe('YoutubeGaleriaComponent', () => {
  let component: YoutubeGaleriaComponent;
  let fixture: ComponentFixture<YoutubeGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
