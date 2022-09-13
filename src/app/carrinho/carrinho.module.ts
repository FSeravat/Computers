import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho.component';

const routes: Routes = [{ path: '', component: CarrinhoComponent }];

@NgModule({
  declarations: [CarrinhoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class CarrinhoModule {}
