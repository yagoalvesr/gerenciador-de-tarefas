import { Tarefa } from './';
import { Injectable } from '@angular/core';
import { TarefasModule } from '../tarefas.module';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  tasks = 'tarefas';

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage[this.tasks];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage[this.tasks] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage[this.tasks] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage[this.tasks] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if ( id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage[this.tasks] = JSON.stringify(tarefas);
  }

}
