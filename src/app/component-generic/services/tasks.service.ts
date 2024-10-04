import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {

   const tasksiniciales: Task[]= [
     {
      id: 14142314,
      title: 'tarea pruebas',
      completed: false,
      personas: ['Juan Pérez'],
      deadline: new Date('01/01/2010')
    }
   ]   

   

    this.tasksSubject.next(tasksiniciales); // Actualiza el observable


  }

  agregarTarea(task: Task): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks); // Actualiza el observable
  }

  obtenerTareas(): Task[] {
    return this.tasks;
  }

  eliminarTarea(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks); // Actualiza el observable
  }

  cambiarEstadoTarea(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.tasksSubject.next(this.tasks); // Actualiza el observable
    }
  }
}
