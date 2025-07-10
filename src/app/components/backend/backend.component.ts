import { Component } from '@angular/core';
import { ProjetoRagnarokComponent } from '../projeto-ragnarok/projeto-ragnarok.component';

@Component({
  selector: 'app-backend',
  standalone: true,
imports: [ProjetoRagnarokComponent],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.css'
})
export class BackendComponent {

}
