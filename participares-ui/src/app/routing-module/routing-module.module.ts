import { PaginaNaoEncontradaComponent } from './../core/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './../core/nao-autorizado.component';
import { AuthGuard } from './../pagina-login/auth.guard';
import { GenericoComponent } from '../pagina-evento/generico/generico.component';
import { CadastroEventoComponent } from '../pagina-usuario/coordenador/cadastro-evento/cadastro-evento.component';
import { ListaAssistenteComponent } from '../pagina-usuario/coordenador/lista-assistente/lista-assistente.component';
import { ItemListaAssistenteComponent } from '../pagina-usuario/coordenador/item-lista-assistente/item-lista-assistente.component';
import { CadastroAssistenteComponent } from '../pagina-usuario/coordenador/cadastro-assistente/cadastro-assistente.component';
import { PaginaCoordenadorComponent } from '../pagina-usuario/coordenador/pagina-coordenador/pagina-coordenador.component';
import { PaginaAdmComponent } from '../pagina-usuario/administrador/pagina-adm/pagina-adm.component';
import { ItemListaCoordenadoresComponent } from '../pagina-usuario/administrador/item-lista-coordenadores/item-lista-coordenadores.component';
import { CadastroCoordenadoresComponent } from '../pagina-usuario/administrador/cadastro-coordenadores/cadastro-coordenadores.component';
import { ListaEventoComponent } from '../pagina-evento/lista-evento/lista-evento.component';
import { ComponentesComponent } from '../pagina-inicial/componentes/componentes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditavelComponent } from '../pagina-evento/editavel/editavel.component';
import { LoginComponent } from '../pagina-login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaCoordenadoresComponent } from '../pagina-usuario/administrador/lista-coordenadores/lista-coordenadores.component';

const routes: Routes =
[
  {path: '', redirectTo: '/pagina-inicial', pathMatch: 'full'}, // Definindo que a página inicial do site é a /pagina-inicial
  {
    path: 'pagina-inicial',
    component: ComponentesComponent
  },
  {
    path: 'evento-userg',
    component: GenericoComponent
  },
  //{path: 'editar-evento', component: CadastroEventoComponent},
  //{path: 'pagina-userlog', component: EditavelComponent},
  //{path: 'lista-evento', component: ListaEventoComponent},

  // Páginas acessíveis pelo Administrador
  {
    path: 'pagina-adm',
    component: PaginaAdmComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRADOR'] }
  },

  {
    path: 'pagina-adm/coordenadores',
    component: ListaCoordenadoresComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRADOR'] }
  },

  {
    path: 'pagina-adm/coordenadores/novo',
    component: CadastroCoordenadoresComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRADOR'] }
  },

  {
    path: 'pagina-adm/coordenadores/:login',
    component: CadastroCoordenadoresComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRADOR'] }
  },
  {
    path: 'pagina-adm/item-lista-coordenadores/:login',
    component: ItemListaCoordenadoresComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRADOR'] }
  },

  // Páginas acessíveis pelo coordenador
  {
    path: 'pagina-coordenador',
    component: PaginaCoordenadorComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COORDENADOR'] }
  },

  {
    path: 'pagina-coordenador/assistentes',
    component: ListaAssistenteComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COORDENADOR'] }
  },

  {
    path: 'pagina-coordenador/assistentes/novo',
    component: CadastroAssistenteComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COORDENADOR'] }
  },
  {
    path: 'pagina-coordenador/assistentes/:login',
    component: CadastroAssistenteComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COORDENADOR'] }
  },
  {
    path: 'pagina-coordenador/item-lista-assistente/:login',
    component: ItemListaAssistenteComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COORDENADOR'] }
  },
  {
    path: 'eventos',
    component: ListaEventoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COORDENADOR'] }
  },
  {
    path: 'eventos/novo',
    component: CadastroEventoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COORDENADOR'] }
  },
  {
    path: 'eventos/:codigo',
    component: CadastroEventoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COORDENADOR'] }
  },
  {
    path: 'item-lista-eventos/:codigo',
    component: GenericoComponent,
    data: { roles: [] }
  },

  //Paginas acessíveis ao assistente
  {
    path: 'pagina-assistente',
    component: ListaEventoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ASSISTENTE'] }
  },

  {path: 'pagina-login', component: LoginComponent},
  //Colocar aqui as routes para páginas inválidas criadas pelo professor

  {path: 'nao-autorizado', component: NaoAutorizadoComponent},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'} // importante que seja a última rota
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModuleModule { }
export const routingComponents = [EditavelComponent, LoginComponent]
