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
      thumbnail: 'https://img.youtube.com/vi/OV83ZvtsMBw/mqdefault.jpg'
    },
    {
      title: 'C# - Saída de dados',
      url: 'https://www.youtube.com/embed/P6jArjb_Kik',
      thumbnail: 'https://img.youtube.com/vi/P6jArjb_Kik/mqdefault.jpg'
    },
    {
      title: 'C# - Variáveis',
      url: 'https://www.youtube.com/embed/t8OeAdAZqOo',
      thumbnail: 'https://img.youtube.com/vi/t8OeAdAZqOo/mqdefault.jpg'
    },
    {
      title: 'C# - Entrada de Dados',
      url: 'https://www.youtube.com/embed/G5mZ6HyxtRM',
      thumbnail: 'https://img.youtube.com/vi/G5mZ6HyxtRM/mqdefault.jpg'
    },
    {
      title: 'C# - Operadores',
      url: 'https://www.youtube.com/embed/OjOb6Gevioo',
      thumbnail: 'https://img.youtube.com/vi/OjOb6Gevioo/mqdefault.jpg'
    },
    {
      title: 'Java - Saída de dados',
      url: 'https://www.youtube.com/embed/y5dtnKOW9mI',
      thumbnail: 'https://img.youtube.com/vi/y5dtnKOW9mI/mqdefault.jpg'
    },
    {
      title: 'Java - Variáveis',
      url: 'https://www.youtube.com/embed/bGp9rYwi6qM',
      thumbnail: 'https://img.youtube.com/vi/bGp9rYwi6qM/mqdefault.jpg'
    },
    {
      title: 'Java - Entrada de Dados',
      url: 'https://www.youtube.com/embed/zVUdEGHX4kc',
      thumbnail: 'https://img.youtube.com/vi/zVUdEGHX4kc/mqdefault.jpg'
    },
    {
      title: 'Java - Operadores',
      url: 'https://www.youtube.com/embed/5830lMj-Ym0',
      thumbnail: 'https://img.youtube.com/vi/5830lMj-Ym0/mqdefault.jpg'
    },
    {
      title: 'Java - Estruturas Condicionais',
      url: 'https://www.youtube.com/embed/lOr82a2PhX8',
      thumbnail: 'https://img.youtube.com/vi/lOr82a2PhX8/mqdefault.jpg'
    },
    {
      title: 'Python - Saída de dados',
      url: 'https://www.youtube.com/embed/VJKStvQvJIk',
      thumbnail: 'https://img.youtube.com/vi/VJKStvQvJIk/mqdefault.jpg'
    },
    {
      title: 'Python - Variáveis',
      url: 'https://www.youtube.com/embed/VRFAPWJ2Y9k',
      thumbnail: 'https://img.youtube.com/vi/VRFAPWJ2Y9k/mqdefault.jpg'
    },
    {
      title: 'Python - Entrada de Dados',
      url: 'https://www.youtube.com/embed/hG7JQWwHQiY',
      thumbnail: 'https://img.youtube.com/vi/hG7JQWwHQiY/mqdefault.jpg'
    },
    {
      title: 'Java - Operadores',
      url: 'https://www.youtube.com/embed/S1itoC5vlyU',
      thumbnail: 'https://img.youtube.com/vi/S1itoC5vlyU/mqdefault.jpg'
    },
    {
      title: 'Instalando o Eclipse IDE for Java Developers 2024',
      url: 'https://www.youtube.com/embed/FqJhYXZNIfI',
      thumbnail: 'https://img.youtube.com/vi/FqJhYXZNIfI/mqdefault.jpg'
    },
    {
      title: 'Como instalar o VSCode e usar o Java!',
      url: 'https://www.youtube.com/embed/r6NId1VNv5Q',
      thumbnail: 'https://img.youtube.com/vi/r6NId1VNv5Q/mqdefault.jpg'
    }
    ,
    {
      title: 'Como instalar o Visual Studio em 2024',
      url: 'https://www.youtube.com/embed/2QdQqvEJePg',
      thumbnail: 'https://img.youtube.com/vi/2QdQqvEJePg/mqdefault.jpg'
    }
  ];
  groupedVideos: any[][] = [];

  constructor() {
    this.groupedVideos = [
      this.videos.slice(0, 5),   // primeira linha
      this.videos.slice(5, 10),  // segunda linha
      this.videos.slice(10, 14), // terceira linha
      this.videos.slice(14)      // quarta linha (restante)
    ];
  }

  selectedVideo = this.videos[0];

  selectVideo(video: any) {
    this.selectedVideo = video;
  }
}
