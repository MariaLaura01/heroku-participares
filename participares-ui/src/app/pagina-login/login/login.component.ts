import { Usuario } from './../../core/model';
import { UsuarioService } from './../../pagina-usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: any;

  usuario: Usuario;

  constructor(private auth: AuthService,
    private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  login(login: string, senha: string){
    this.msg = "Login: "+ login +"  Senha:"+ senha; // Apagar
    this.auth.login(login, senha)
      .then(() =>
      {
        this.usuarioService.buscarPorLogin(login)
          .then(( resultado : any ) =>
          {
            this.usuario = resultado;
            this.msg = this.msg + " Usuario recuperado: " + JSON.stringify(Usuario.toJson(this.usuario)); // Apagar

            this.msg = this.msg + "\n Url construída: " + this.usuarioService.getStringConstruida(login); // Apagar

            if(!this.usuario){
              this.msg = 'Houve um erro na busca do usuario!'
            }
            if(this.usuario.tipo === ('ADMINISTRADOR')){
              this.router.navigate(['/pagina-adm']);
            }
            else if(this.usuario.tipo === 'COORDENADOR'){
              this.router.navigate(['/pagina-coordenador']);
            }
            else if(this.usuario.tipo === 'ASSISTENTE'){
              this.router.navigate(['/pagina-assistente']);
            }
          }
          ).catch(() =>
            {
              this.msg = "Houve um erro ao buscar os detalhes do usuários.";
            });
      })
      .catch(() => {
        this.msg = this.msg + '\n Resultado: ' + 'Usuário e/ou senha inválida'; // Trocar
      })
  }

}
