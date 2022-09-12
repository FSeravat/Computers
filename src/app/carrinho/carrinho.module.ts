import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';


const routes: Routes = [
  { path: '', component: CarrinhoComponent }
];

@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CarrinhoModule { }
