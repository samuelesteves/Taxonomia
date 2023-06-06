import { Component } from '@angular/core';
import { Pesquisador } from '../models/pesquisador';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { PesquisadorService } from '../services/pesquisador.service';

@Component({
  selector: 'app-pesquisador-lst',
  templateUrl: './pesquisador-lst.component.html',
  styleUrls: ['./pesquisador-lst.component.css']
})
export class PesquisadorLstComponent {
  displayedColumns: string[] = ['acoes', 'nome', 'documento', 'telefone', 'dataNascimento', 'areaEstudo', 'logradouro', 'numero', 'bairro', 'cidade', 'uf']

  dataSource = new MatTableDataSource<Pesquisador>();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private pesquisadorService: PesquisadorService) {
    this.obterTodos();
  }

  novo(): void {
    this.router.navigate(['/pesquisador/novo'])
  }

  obterTodos():void {
    this.pesquisadorService.obterTodos().subscribe({
     next: (dados) => {
      this.dataSource.data = dados
     },
     error(msg) {
      console.log('Erro ao obter pesquisadores: ', msg)
     },
    })
  }

  remover(id:number):void {
    var result = confirm("Deseja remover esse Pesquisador?")
    ind:Number

    if(result) {
      this.pesquisadorService.remover(id).subscribe({
        next: (dados) => {
          if(dados > 0) {
            alert("Pesquisador removido")
            this.obterTodos()
          }
        },
        error(msg) {
          console.log('Erro ao obter pesquisadores: ', msg)
         },
      })
    }
  }

  alterar(id:number):void {
    this.router.navigate(['/pesquisador/edit/' + id])
  }
}
