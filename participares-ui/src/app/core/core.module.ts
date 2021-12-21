import { PaginaEventoService } from './../pagina-evento/pagina-evento.service';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import localePt from '@angular/common/locales/pt';
import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from '../pagina-login/auth.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers:
  [
    // Importar todos os services aqui
    PaginaEventoService,
    AuthService,
    ErrorHandlerService,
    MessageService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
