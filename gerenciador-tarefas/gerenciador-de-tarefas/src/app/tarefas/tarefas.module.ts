import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';

import { TarefaService } from './shared';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // por ser modulo, ele esta aqui
    FormsModule // por ser modulo, ele esta aqui
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
