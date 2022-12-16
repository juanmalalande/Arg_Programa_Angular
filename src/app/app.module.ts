import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarrasuperiorComponent } from './components/barrasuperior/barrasuperior.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { from } from 'rxjs';
import { DatosComponent } from './components/datos/datos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HttpClientModule } from '@angular/common/http';
import { FormacionComponent } from './components/formacion/formacion.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { InteresesComponent } from './components/intereses/intereses.component'





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BarrasuperiorComponent,
    CreditosComponent,
    RelojComponent,
    DatosComponent,
    ExperienciaComponent,
    FormacionComponent,
    CompetenciasComponent,
    InteresesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
