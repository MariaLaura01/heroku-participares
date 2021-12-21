import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscolasService {

  escolasUrl = "http://localhost:8081/escolas";

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any>{
    return this.http.get(this.escolasUrl)
      .toPromise();
  }
}
