import { Routes } from '@angular/router';
import { PrimeiraSectionComponent } from './components/primeira-section/primeira-section.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { UxComponent } from './components/ux/ux.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { BackendComponent } from './components/backend/backend.component';
import { FrontendComponent } from './components/frontend/frontend.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { AdmComponent } from './components/adm/adm.component';
import { TiComponent } from './components/ti/ti.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { DesenvolvimentoSoftwareComponent } from './components/desenvolvimento-software/desenvolvimento-software.component';
import { ProjetoRagnarokComponent } from './components/projeto-ragnarok/projeto-ragnarok.component';

export const routes: Routes = [
  { path: '', component: PrimeiraSectionComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'ux', component: UxComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'backend', component: BackendComponent },
  { path: 'frontend', component: FrontendComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'ti', component: TiComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'desenvolvimento-software', component: DesenvolvimentoSoftwareComponent },
  { path: 'projeto-ragnarok', component: ProjetoRagnarokComponent},
];
