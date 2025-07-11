import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../shared/safe-url.pipe';

@Component({
  selector: 'app-youtube-galeria',
  standalone: true,
   imports: [CommonModule, SafeUrlPipe],
  templateUrl: './youtube-galeria.component.html',
  styleUrls: ['./youtube-galeria.component.scss']
})
export class YoutubeGaleriaComponent {
  videos = [
    {
      title: 'Projeto "CONTATOS" - LIVRO: Use a Cabeça! C#',
      url: 'https://www.youtube.com/embed/OV83ZvtsMBw',
      thumbnail: 'https://img.youtube.com/OV83ZvtsMBw/mqdefault.jpg'
    },
    {
      title: 'Java - Operadores',
      url: 'https://www.youtube.com/hG7JQWwHQiY&t=3s',
      thumbnail: 'https://img.youtube.com/vi/hG7JQWwHQiY&t=3s/mqdefault.jpg'
    },
    {
      title: 'Java - Operadores',
      url: 'https://www.youtube.com/embed/5830lMj-Ym0',
      thumbnail: 'https://img.youtube.com/vi/5830lMj-Ym0/mqdefault.jpg'
    },
    {
      title: 'Projeto Java na Prática',
      url: 'https://www.youtube.com/embed/ID_DO_VIDEO4',
      thumbnail: 'https://img.youtube.com/vi/ID_DO_VIDEO4/mqdefault.jpg'
    }
  ];

  selectedVideo = this.videos[0];

  selectVideo(video: any) {
    this.selectedVideo = video;
  }
}
