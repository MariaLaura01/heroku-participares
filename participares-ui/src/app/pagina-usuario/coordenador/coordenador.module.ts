import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAssistenteComponent } from './cadastro-assistente/cadastro-assistente.component';
import { ListaAssistenteComponent } from './lista-assistente/lista-assistente.component';
import { ItemListaAssistenteComponent } from './item-lista-assistente/item-lista-assistente.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { PaginaCoordenadorComponent } from './pagina-coordenador/pagina-coordenador.component';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CadastroAssistenteComponent,
    ListaAssistenteComponent,
    ItemListaAssistenteComponent,
    CadastroEventoComponent,
    PaginaCoordenadorComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    DividerModule,
    TableModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports : [
    CadastroAssistenteComponent,
    CadastroEventoComponent,
    ItemListaAssistenteComponent,
    ListaAssistenteComponent,
    PaginaCoordenadorComponent
  ]
})
export class CoordenadorModule { }
