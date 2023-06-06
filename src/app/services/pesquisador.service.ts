import { Injectable } from '@angular/core';
import { Pesquisador } from '../models/pesquisador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisadorService {

  constructor(private http: HttpClient) { }
  pesquisadores: Pesquisador[] = []
  count: number = 1
  api: string = "http://localhost:8080"

  public inserir(pesquisador: Pesquisador): Observable<number> {
    return this.http.post<number>(this.api + '/pesquisador', pesquisador);
  }

  public obterTodos(): Observable<Pesquisador[]> {
    return this.http.get<Pesquisador[]>(this.api + "/pesquisadores");
  }


  public remover(id: number): Observable<number> {
    return this.http.delete<number>(this.api + "/pesquisador/" + id);
  }


  public alterar(id: number, pesquisador: Pesquisador): Observable<number> {
    return this.http.put<number>(this.api + "/pesquisador/" + id, pesquisador);
  }

  public obterPorId(id: number): Observable<Pesquisador> {

    return this.http.get<Pesquisador>(this.api + "/pesquisador/" + id);
  }

} 
