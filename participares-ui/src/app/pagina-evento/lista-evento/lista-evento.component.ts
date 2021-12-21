import { Evento } from './../../core/model';
import { UsuarioService } from './../../pagina-usuario/usuario.service';
import { AuthService } from './../../pagina-login/auth.service';
import { EventoService } from './../../eventos/eventos.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Escola, Usuario } from 'src/app/core/model';
import { PaginaEventoService } from '../pagina-evento.service';

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.css']
})
export class ListaEventoComponent implements OnInit {

  eventos: Array<Evento>;

  escola = new Escola();

  usuarioLogado: Usuario;

  constructor(private eventoService: EventoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private auth: AuthService,
    private userService: UsuarioService) { }

  ngOnInit(): void
  {
    this.carregarUsuarioLogado();
    this.pesquisar();
  }

  // Insere as informações na página
  pesquisar(): void
  {
    this.eventoService.pesquisar()
      .then(resultado => {
        this.eventos = [];
        console.log("Usuario logado: " + this.usuarioLogado.login);
        resultado.forEach((evento: Evento) => {
          console.log(evento.escola.nome);
          if(evento.escola.nome == this.usuarioLogado.escola.nome){
            this.eventos.push(evento);
          }
        })
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarUsuarioLogado(){
    let loginLogado: string;
    loginLogado = this.auth.jwtPayload?.user_name;
    this.userService.buscarPorLogin(loginLogado)
      .then((usuarioLogado : any) => {
        this.usuarioLogado = usuarioLogado;
      })
      .catch((erro: any) => {
        this.errorHandler.handle(erro);
      });
  }
/*
  // Apaga o usuario
  confirmarExclusao(usuario: any): void
  {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(usuario);
      }
    });
  }
*/
  excluir(usuario: any): void
  {
    this.eventoService.excluir(usuario.codigo)
      .then(() => {
        this.pesquisar();
        this.messageService.add(
          {severity: 'success', detail: 'Usuário excluído com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
