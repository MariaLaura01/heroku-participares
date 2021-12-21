import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { PaginaUsuarioModule } from './pagina-usuario/pagina-usuario.module';
import { PaginaLoginModule } from './pagina-login/pagina-login.module';
import { PaginaEventoModule } from './pagina-evento/pagina-evento.module';
import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthService } from './pagina-login/auth.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaginaInicialModule,
    PaginaEventoModule,
    PaginaLoginModule,
    PaginaUsuarioModule,
    RoutingModuleModule,
    CoreModule,
    SharedModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    AuthService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
