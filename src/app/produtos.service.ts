import { Injectable } from '@angular/core';

import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  getAll() {
    return this.produtos;
  }
  getOne(produtoId: number) {
    return this.produtos.find((produto) => produtoId == produto.id);
  }
  constructor() {}
}
