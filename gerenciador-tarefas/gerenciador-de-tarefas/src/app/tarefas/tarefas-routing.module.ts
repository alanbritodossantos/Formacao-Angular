import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
export const TarefaRoutes:Routes = [
  {
    path:'tarefas',// [atalho]se na url digitar 'tarefa', vai para 'tarefas/listar'
    redirectTo:'tarefas/listar'
  },
  {
    path:'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path:'tarefas/cadastrar',// que essa url for chamada, vai direicionar para pagina de cadastro
    component:CadastrarTarefaComponent
  }
];
