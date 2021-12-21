import { Imagem } from './../core/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class PhotoService
{
  /*
  imagensUrl = 'http://localhost:8081/imagens';

  constructor(private http: HttpClient) { }

  getDefaultImages()
  {
  return this.http.get<any>('assets/showcase/data/photos.json')
    .toPromise()
    .then(res => <typeof Image[]> res)
    .then(data => { return data; });
  }

  getImages(): Promise<any>
  {
    return this.http.get(this.imagensUrl)
    .toPromise()
    .then(res => <typeof Image[]> res)
    .then(response => {
        return response;
      })
  }

  adicionarFoto(imagens: Imagens): Promise<Imagens> | any
  {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

      return this.http.post<Imagens>(this.imagensUrl,
        Imagens.toJson(imagens), {headers})
        .toPromise();
  }
  */
}
