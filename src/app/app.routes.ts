// app.routes.ts
import { Routes } from '@angular/router';
import { ContatosComponent } from './components/contatos/contatos.component';
import { PrimeiraSectionComponent } from './components/primeira-section/primeira-section.component';
import { UxComponent } from './components/ux/ux.component'; // Novo componente
import { CursosComponent } from './components/cursos/cursos.component'; 
import { BackendComponent } from './components/backend/backend.component'; // Novo componente
import { FrontendComponent } from './components/frontend/frontend.component'; // Novo componente
import { ExperienciasComponent } from './components/experiencias/experiencias.component'; // Novo componente
import { AdmComponent } from './components/adm/adm.component'; // Novo componente
import { TiComponent } from './components/ti/ti.component'; // Novo componente

export const routes: Routes = [
  { path: '', component: PrimeiraSectionComponent }, // Página inicial
  { path: 'contatos', component: ContatosComponent }, // Página de contatos
  { path: 'ux', component: UxComponent }, // Nova rota para o componente UX
  { path: 'cursos', component: CursosComponent }, // Cursos
  { path: 'backend', component: BackendComponent }, // Nova rota para o componente Backend
  { path: 'frontend', component: FrontendComponent }, // Nova rota para o componente Frontend
  { path: 'experiencias', component: ExperienciasComponent }, // Nova rota para o componente Experiências
  { path: 'adm', component: AdmComponent }, // Nova rota para o componente Adm
  { path: 'ti', component: TiComponent }, // Nova rota para o componente TI
];
