import { Imagem } from './../core/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  imagensUrl = 'http://localhost:8081/imagens';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {
    return this.http.get(`${this.imagensUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
