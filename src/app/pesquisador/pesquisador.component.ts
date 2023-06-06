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
      this.pesquisadorService.alterar(this.id, this.pesquisador).subscribe({
        next: () => {
          this.router.navigate(['/pesquisadores'])
        },
        error(msg) {
          console.log('Erro ao obter pesquisadores: ', msg)
        }
      })
    } else {
      this.pesquisadorService.inserir(this.pesquisador).subscribe({
        next:() => {
          this.router.navigate(['/pesquisadores'])
        },
        error(msg) {
          console.log('Erro ao obter pesquisadores: ', msg)
        }
      })
    }
    
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
    this.pesquisadorService.obterPorId(id).subscribe({
      next:(dados) => {
        this.pesquisador = dados
      },
      error(msg) {
        console.log('Erro ao obter pesquisadores: ', msg)
      }
    })
  }

  voltar() {
    this.router.navigate(['/pesquisadores'])
  }
}
