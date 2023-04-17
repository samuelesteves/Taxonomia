import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pesquisador } from '../models/pesquisador';
import { PesquisadorService } from '../services/pesquisador.service';

@Component({
  selector: 'app-pesquisador',
  templateUrl: './pesquisador.component.html',
  styleUrls: ['./pesquisador.component.css']
})
export class PesquisadorComponent implements OnInit {
  pesquisador: Pesquisador = new Pesquisador()
  id: number = 0

  constructor(private router: Router,
    private route: ActivatedRoute,
    private pesquisadorService: PesquisadorService) { }

  salvar() {
    if (this.id > 0) {
      this.pesquisador.id = this.id
      this.pesquisadorService.alterar(this.pesquisador)
    } else {
      this.pesquisadorService.inserir(this.pesquisador)
    }
    this.router.navigate(['/pesquisadores'])
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('id') != null) {
        this.id = Number(params.get('id'))
        this.carregarPesquisador(this.id)
      }
    })
  }

  carregarPesquisador(id:number):void { 
    this.pesquisador = this.pesquisadorService.obterPorId(id)
  }

  voltar() {
    this.router.navigate(['/pesquisadores'])
  }
}
