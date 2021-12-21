import { Escola, Evento } from './../core/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class PaginaEventoService
{

  eventosUrl = 'http://localhost:8081/eventos';
  escolasUrl = 'http://localhost:8081/escolas';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any>
  {
    return this.http.get(`${this.eventosUrl}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  excluir(codigo: number): Promise<any>
  {
    return this.http.delete(`${this.eventosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(evento: Evento): Promise<Evento> | any
  {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

      return this.http.post<Evento>(this.eventosUrl,
        Evento.toJson(evento), {headers})
        .toPromise();
  }

  atualizar(evento: Evento): Promise<Evento> | any
  {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Evento>(`${this.eventosUrl}/${evento.codigo}`, Evento.toJson(evento), { headers })
      .toPromise()
      .then(response => {
        const eventoAlterado = response;
        return eventoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Evento> | any
  {
    return this.http.get<Evento>(`${this.eventosUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const evento = response;
        return evento;
      });
  }

  nomeEscolaPorCodigo(codigo: number): Promise<Escola> | any // Provavelmente está errado
  {
    return this.http.get<Escola>(`${this.escolasUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const escola = response;
        return escola;
      });
  }

}
