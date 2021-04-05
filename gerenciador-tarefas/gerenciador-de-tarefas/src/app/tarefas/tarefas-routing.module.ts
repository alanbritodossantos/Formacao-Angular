import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';

export const TarefaRoutes:Routes = [
  {
    path:'tarefas',// [atalho]se na url digitar 'tarefa', vai para 'tarefas/listar'
    redirectTo:'tarefas/listar'
  },
  {
    path:'tarefas/listar',
    component: ListarTarefaComponent
  }
];
