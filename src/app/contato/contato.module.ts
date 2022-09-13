import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

import { ContatoComponent } from './contato.component';

const routes: Routes = [{ path: '', component: ContatoComponent }];

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ContatoModule {}
