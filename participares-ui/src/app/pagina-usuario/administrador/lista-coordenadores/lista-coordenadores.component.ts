import { AuthService } from './../../../pagina-login/auth.service';
import { Usuario } from 'src/app/core/model';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-coordenadores',
  templateUrl: './lista-coordenadores.component.html',
  styleUrls: ['./lista-coordenadores.component.css']
})
export class ListaCoordenadoresComponent implements OnInit {

  usuarios: Array<Usuario> = [];

  constructor(private userService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    public auth: AuthService) { }

  ngOnInit(): void
  {
    this.pesquisar();
  }

  // Insere as informações na página
  pesquisar(): void
  {
    this.usuarios = [];
    this.userService.pesquisar()
      .then(resultado => {
        resultado.forEach((user : Usuario) => {
          if(user.tipo === 'COORDENADOR'){
            this.usuarios.push(user);
          }
        });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  excluir(usuario: any): void
  {
    this.userService.excluir(usuario.login)
      .then(() => {
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
