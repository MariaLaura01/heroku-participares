import { AuthService } from './../../../pagina-login/auth.service';
import { EscolasService } from './../../../escolas/escolas.service';
import { Usuario, Escola } from './../../../core/model';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-coordenadores',
  templateUrl: './cadastro-coordenadores.component.html',
  styleUrls: ['./cadastro-coordenadores.component.css']
})
export class CadastroCoordenadoresComponent implements OnInit
{
  loginUsuario: string;

  usuario = new Usuario();

  escolas = [];

  verificarEstado = true; // Util para definir se o usuario já existe no banco

  mensagem: any;

  constructor(private userService: UsuarioService,
    private escolaService: EscolasService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title) { }

  ngOnInit(): void
  {
    this.loginUsuario = this.route.snapshot.params[`login`];
    this.title.setTitle('Cadastro de Coordenador');
    if(this.loginUsuario)
    {
      this.carregarUsuario(this.loginUsuario);
    }
    this.carregarEscolas();
  }

  carregarEscolas() : any
  {
    return this.escolaService.listarTodas()
    .then(escolas => {
      this.escolas = escolas.map((e:any) => ({label: e.nome, value: e.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) : void
  {
    if(this.editando)
    {
      this.atualizarUsuario(form);
    }
    else
    {
      this.adicionarUsuario(form);
      this.verificarEstado = true;
    }
  }

  existe: boolean;
  get editando() : boolean
  {
    if(this.verificarEstado){
      this.userService.buscarPorLogin(this.usuario.login)
        .then((resultado: Usuario) => {
          this.existe = resultado? true:false;
        })
        .catch((erro: any) => {
          this.existe = false;
          this.errorHandler.handle(erro)
        });
      this.verificarEstado = false;
    }
    return this.existe;
  }
  /*
  get editando() : boolean
  {
    return Boolean(this.usuario);
  }
  */
  carregarUsuario(login: string): void
  {
    this.userService.buscarPorLogin(login)
      .then((usuario: Usuario) => {
        if(usuario){
          this.usuario = usuario;
          this.verificarEstado = true;
        }
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  adicionarUsuario(_form: NgForm)
  {
    this.usuario.tipo = 'COORDENADOR';
    this.userService.adicionar(this.usuario)
    .then((sucesso : any) => {
      if(sucesso){
        this.mensagem = "Coordenador " + sucesso.login + " criado com sucesso!";
        this.verificarEstado = true;
      }
    })
    .catch((erro: any) => this.errorHandler.handle(erro));
  }

  atualizarUsuario(_form: NgForm){
    this.userService.atualizar(this.usuario)
      .then((usuario: Usuario) => {
        this.usuario = usuario;
        this.mensagem = "Coordenador " + usuario.login + " atualizado com sucesso!";
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  novo(form: NgForm){
    form.reset(new Usuario);
    this.router.navigate(['/pagina-adm']);
  }
}
