import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private notificacaoService: NotificacaoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLowerCase();
      if (descricao) {
        this.produtos = produtos.filter((produto) =>
          produto.descricao.toLowerCase().includes(descricao)
        );
        return;
      }
      this.produtos = produtos;
    });
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar('Produto adicionado ao carrinho!');
  }
}
