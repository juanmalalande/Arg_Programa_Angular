import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BarrasuperiorComponent } from './components/barrasuperior/barrasuperior.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { DatosComponent } from './components/datos/datos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { InteresesComponent } from './components/intereses/intereses.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'creditos', component: CreditosComponent},
  {path: 'datos', component: DatosComponent},
  {path: 'exp', component: ExperienciaComponent},
  {path: 'form', component: FormacionComponent},
  {path: 'comp', component: CompetenciasComponent},
  {path: 'int', component: InteresesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
