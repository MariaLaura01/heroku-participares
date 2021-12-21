import { Usuario } from './../../../core/model';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-item-lista-coordenadores',
  templateUrl: './item-lista-coordenadores.component.html',
  styleUrls: ['./item-lista-coordenadores.component.css']
})
export class ItemListaCoordenadoresComponent implements OnInit {

  usuario = new Usuario();

  constructor(private userService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const loginUsuario = this.route.snapshot.params[`login`];
    this.pesquisar(loginUsuario);
  }

  // Insere as informações na página
  pesquisar(login: string): void
  {
    this.userService.buscarPorLogin(login)
      .then((resultado:Usuario) => {
        this.usuario = resultado;
      })
      .catch((erro:any) => this.errorHandler.handle(erro));
  }

  // Apaga o usuario
  confirmarExclusao(usuario: any): void
  {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(this.usuario);
      }
    });
  }

  excluir(coord: any): void
  {
    this.userService.excluir(coord.login)
      .then(() => {
        this.messageService.add(
          {severity: 'success', detail: 'Usuário excluído com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  //pega o nome da escola atraves do codigo (não sei se tá certo)   TENTAR FAZER UAM FUNÇÃO NO SERVICE ESCOLA PARA ISSO
  /*buscarEscola(codigo: number) : void
  {
    this.userService.nomeEscolaPorCodigo(codigo)
    .then((escola: Escolas) =>
    {
      this.escola = escola;
    })
    .catch((erro: any) => this.errorHandler.handle(erro));
  }*/
}
