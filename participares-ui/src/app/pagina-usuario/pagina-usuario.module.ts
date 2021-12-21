import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssistenteModule } from './assistente/assistente.module';
import { CoordenadorModule } from './coordenador/coordenador.module';
import { AdministradorModule } from './administrador/administrador.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador/administrador.component';
import { CoordenadorComponent } from './coordenador/coordenador.component';
import { AssistenteComponent } from './assistente/assistente.component';

@NgModule({
  declarations: [
    AdministradorComponent,
    CoordenadorComponent,
    AssistenteComponent
  ],
  imports: [
    CommonModule,
    AdministradorModule,
    CoordenadorModule,
    AssistenteModule,
    RouterModule
  ],
  exports : [
    AdministradorComponent,
    CoordenadorComponent,
    AssistenteComponent
  ]
})
export class PaginaUsuarioModule { }
