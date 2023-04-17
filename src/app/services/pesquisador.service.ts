import { Injectable } from '@angular/core';
import { Pesquisador } from '../models/pesquisador';

@Injectable({
  providedIn: 'root'
})
export class PesquisadorService {

  constructor() { }
  pesquisadores: Pesquisador[] = []
  count:number = 1

  public inserir(pesquisador:Pesquisador):void {
    pesquisador.id = this.count

    this.pesquisadores.push(pesquisador);
    this.count = this.count + 1
  }

  public obterTodos(): Pesquisador[] {
    return this.pesquisadores
  }

  public remover(id:number):boolean {
    var ind:number = -1
    for(let i=0; i<=this.pesquisadores.length; i++) {
      if(this.pesquisadores[i].id == id) {
        ind = i;
        break;
      }
    }
    this.pesquisadores.splice(ind, 1)
    return true
  }

  public alterar(pesquisador:Pesquisador): Pesquisador {
    var ind:number = -1
    for(let i=0; i<=this.pesquisadores.length; i++) {
      if(this.pesquisadores[i].id == pesquisador.id) {
        ind = i;
        break;
      }
    }
    this.pesquisadores[ind] = pesquisador
    return pesquisador
  }

  public obterPorId(id: number): Pesquisador {
    var ind:number = -1
    for(let i=0; i<=this.pesquisadores.length; i++) {
      if(this.pesquisadores[i].id == id) {
        ind = i;
        break;
      }
    }
    return this.pesquisadores[ind]
  }
}
