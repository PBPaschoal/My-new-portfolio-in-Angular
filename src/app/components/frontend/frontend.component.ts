import { Component } from '@angular/core';
import { ProjetoRagnarokComponent } from '../projeto-ragnarok/projeto-ragnarok.component';


@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [ProjetoRagnarokComponent],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.css'
})
export class FrontendComponent { 

}
