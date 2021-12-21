import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes/componentes.component';

import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ComponentesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    RouterModule
  ],
  exports:[
    ComponentesComponent
  ]
})
export class PaginaInicialModule { }
