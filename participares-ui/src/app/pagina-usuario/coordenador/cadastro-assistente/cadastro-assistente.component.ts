import { AuthService } from './../../../pagina-login/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Escola, Usuario } from 'src/app/core/model';
import { UsuarioService } from '../../usuario.service';
import { empty } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-cadastro-assistente',
  templateUrl: './cadastro-assistente.component.html',
  styleUrls: ['./cadastro-assistente.component.css']
})
export class CadastroAssistenteComponent implements OnInit {

  loginUsuario: string;

  usuario = new Usuario();

  usuarioLogado: Usuario;

  verificarEstado = true; // Util para definir se o usuario já existe no banco

  mensagem: any;

  constructor(private userService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private auth: AuthService) { }

  ngOnInit(): void
  {
    this.loginUsuario = this.route.snapshot.params[`login`];
    this.title.setTitle('Cadastro de Assistente');
    if(this.loginUsuario)
    {
      this.carregarUsuario(this.loginUsuario);
    }
    this.carregarUsuarioLogado();
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

  adicionarUsuario(_form: NgForm)
  {
    this.usuario.tipo = 'ASSISTENTE';
    this.usuario.escola = new Escola();
    this.usuario.escola.codigo = this.usuarioLogado.escola.codigo;
    this.userService.adicionar(this.usuario)
      .then((sucesso : Usuario) => {
        if(sucesso){
          this.mensagem = "Assistente " + sucesso.login + " criado com sucesso!";
          this.verificarEstado = true;
        }
      })
    .catch((erro: any) => this.errorHandler.handle(erro));
  }

  atualizarUsuario(_form: NgForm){
    this.userService.atualizar(this.usuario)
      .then((usuario: Usuario) => {
        this.usuario = usuario;
        this.mensagem = "Assistente " + usuario.login + " atualizado com sucesso!";
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  novo(form: NgForm){
    form.reset(new Usuario);
    this.router.navigate(['/pagina-adm']);
  }
}
