import { Escola, Usuario } from 'src/app/core/model';
import { EventoService } from './../../../eventos/eventos.service';
import { Evento } from './../../../core/model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from '../../usuario.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/pagina-login/auth.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  evento = new Evento();

  mensagem : any;

  usuarioLogado: Usuario;

  constructor(private userService: UsuarioService,
    private eventoService: EventoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    const codigoEvento = this.route.snapshot.params[`codigo`];
    if(codigoEvento)
    {
      this.carregarEvento(codigoEvento);
    }
    this.carregarUsuarioLogado();
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

  salvar(form: NgForm) : void
  {
    console.log('Salvar');
    if(this.editando)
    {
      this.atualizarEvento(form);
      console.log('editando');
    }
    else
    {
      this.adicionarEvento(form);
      console.log('adicionando');
    }
  }

  get editando() : boolean
  {
    return Boolean(this.evento.codigo);
  }

  carregarEvento(codigo: number): void
  {
    this.eventoService.buscarPorCodigo(codigo)
      .then((evento : Evento) => {
        this.evento = evento;
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  adicionarEvento(_form: NgForm)
  {
    if(!this.evento.local){
      this.evento.local = this.usuarioLogado.escola.endereco;
    }
    this.evento.escola = new Escola();
    this.evento.escola.codigo = this.usuarioLogado.escola.codigo;
    this.eventoService.adicionar(this.evento)
    .then((evento : Evento) => {
      if(evento){
        this.mensagem = 'Evento "' + evento.nome + '"criado com sucesso.';
      }
    })
    .catch((erro: any) => this.errorHandler.handle(erro));
  }

  atualizarEvento(_form: NgForm)
  {
    this.eventoService.atualizar(this.evento)
      .then((evento: Evento) => {
        this.evento = evento;
        this.mensagem = 'Evento "' + evento.nome + '"atualizado com sucesso.';
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  novo(form: NgForm){
    form.reset(new Evento);
    this.router.navigate(['/pagina-coordenador']);
  }
}
