import { AuthService } from './../../../pagina-login/auth.service';
import { Usuario, Escola } from 'src/app/core/model';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from '../../usuario.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-lista-assistente',
  templateUrl: './lista-assistente.component.html',
  styleUrls: ['./lista-assistente.component.css']
})
export class ListaAssistenteComponent implements OnInit {

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
        let coordenador: Usuario;
        coordenador = resultado.filter(
          (elemento : Usuario) =>
            elemento.login == this.auth.jwtPayload?.user_name)[0];

        resultado.forEach((user : Usuario) => {
          if(user.tipo === 'ASSISTENTE' && user.escola.nome === coordenador.escola.nome){
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
        this.messageService.add(
          {severity: 'success', detail: 'Usuário excluído com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
