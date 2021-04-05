import { Injectable } from '@angular/core';
import { Tarefa } from './'
import { JsonPipe } from '@angular/common';
@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[]{/// array de tarefas
    const tarefas = localStorage['tarefas'];// localStorrage é como se fosse uma array
    return tarefas? JSON.parse(tarefas): [];
  }

  cadastar(tarefa:Tarefa):void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas); // JSON.stringify significa converter para string
  }

  buscarPorId(id: number): Tarefa{
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa=>tarefa.id==id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remove(id:number): void {
    let tarefas:Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id:number):void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj,index,objs) =>{
      if(id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }




}
