import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const routes: Routes =[
  {
    path:'',
    redirectTo:'/tarefas/listar',
    pathMatch:'full'
  },
    ...TarefaRoutes // o (...) permite concatenar array, tipo merge
];//array de lista de rotas

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
