import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericoComponent } from './generico/generico.component';
import { EditavelComponent } from './editavel/editavel.component';
import { ListaEventoComponent } from './lista-evento/lista-evento.component';

import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';
import {GalleriaModule} from 'primeng/galleria';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    GenericoComponent,
    EditavelComponent,
    ListaEventoComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    SplitterModule,
    DividerModule,
    GalleriaModule,
    FileUploadModule,
    HttpClientModule,
    TooltipModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    GenericoComponent,
    EditavelComponent,
    ListaEventoComponent,
    RouterModule
  ]
})
export class PaginaEventoModule { }
