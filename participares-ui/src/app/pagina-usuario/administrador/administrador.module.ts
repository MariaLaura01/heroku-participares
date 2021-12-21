import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroCoordenadoresComponent } from './cadastro-coordenadores/cadastro-coordenadores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCoordenadoresComponent } from './lista-coordenadores/lista-coordenadores.component';
import { ItemListaCoordenadoresComponent } from './item-lista-coordenadores/item-lista-coordenadores.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';

import {DropdownModule} from 'primeng/dropdown';
import { PaginaAdmComponent } from './pagina-adm/pagina-adm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ListaCoordenadoresComponent,
    ItemListaCoordenadoresComponent,
    CadastroCoordenadoresComponent,
    PaginaAdmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    SharedModule,
    RouterModule,

    CommonModule,
    DividerModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    ListaCoordenadoresComponent,
    ItemListaCoordenadoresComponent,
    CadastroCoordenadoresComponent,
    PaginaAdmComponent
  ]
})
export class AdministradorModule { }
