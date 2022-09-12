import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DetalhesProdutoComponent },
];

@NgModule({
  declarations: [ProdutosComponent, DetalhesProdutoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class ProdutosModule {}
