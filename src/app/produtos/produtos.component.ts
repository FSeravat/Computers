import { Component, OnInit } from '@angular/core';

import { NotificacaoService } from '../notificacao.service';
import { ProdutosService } from '../produtos.service';
import { IProduto, produtos } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;
  constructor(
    private produtosService: ProdutosService,
    private notificacaoService: NotificacaoService
  ) {}

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar('Produto adicionado ao carrinho!');
  }
}
