import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService
{
  userUrl = 'http://localhost:8081/usuarios';

  constructor(private http: HttpClient) { }

  listarTodos(): Promise<any>
  {
    return this.http.get(this.userUrl)
    .toPromise();
  }

  pesquisar() : Promise<any>
  {
    return this.http.get(`${this.userUrl}`)
    .toPromise()
    .then(response => {
      return response;
    })
  }

  adicionar(user: Usuario) : Promise<Usuario> | any
  {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post<Usuario>(this.userUrl, Usuario.toJson(user), {headers})
    .toPromise();
  }

  excluir(login: string): Promise<any>
  {
    return this.http.delete(`${this.userUrl}/${login}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(user: Usuario): Promise<Usuario>
  {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Usuario>(`${this.userUrl}/${user.login}`, Usuario.toJson(user), { headers })
      .toPromise()
      .then(response => {
        const userAlterado = response;
        return userAlterado;
      }) as Promise<Usuario>;
  }

  buscarPorLogin(login: string): Promise<Usuario> | any
  {
    return this.http.get<Usuario>(`${this.userUrl}/${login}`)
      .toPromise()
      .then(response => {
        const user = response;
        return user;
      });
  }

  getStringConstruida(login: string): string{
    return this.userUrl + '/' + login;
  }

}
