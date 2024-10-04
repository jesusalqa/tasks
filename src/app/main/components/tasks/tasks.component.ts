import { Component, OnInit } from '@angular/core';
import { ApisharedService } from 'src/app/core/apishared.service';
import { Observable } from 'rxjs';
import { Task } from 'src/app/component-generic/interface/task';
import { TasksService } from 'src/app/component-generic/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks$!: Observable<Task[]>;
  task: Task = { id: 0, title: '', completed: false, deadline: new Date() };
  editing: boolean = false;

  public dataapi$!: Observable<any[]>;
  public error: string | null = null;

  arrayEventos: any[] = [];
  public arrycolumn: any = [];
  public countcolumn: number = 0;

  constructor(private apisharedservice: ApisharedService,
    private tasksService: TasksService) {
    this.tasks$ = this.tasksService.tasks$;
  }

  ngOnInit(): void {
    this.arrycolumn = [
      { namekey: "id", title: "ID" },
      { namekey: "title", title: "Título" },
      { namekey: "personas", title: "Personas" },
      { namekey: "completed", title: "Estado" },
      { namekey: "deadline", title: "Fecha Límite" }
    ];

    this.arrayEventos = [
      //   { nameBotton: "actualizar", titleBotton: "Actualizar", accionBotton: "actualizar", classBotton: "btn-primary" },
      { nameBotton: "eliminar", titleBotton: "Eliminar", accionBotton: "eliminar", classBotton: "btn-danger" },
      { nameBotton: "cambiarestado", titleBotton: "Cambiar Estado", accionBotton: "cambiarestado", classBotton: "btn-danger" },
    ];
  }

  getArray(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  getEventTabla($event: any) {
    console.log($event)
    switch ($event.accion) {
      case "cambiarestado": {
        const id = $event.Dataitem.id

        this.tasksService.cambiarEstadoTarea(id);

      }
        break;
      case "eliminar": {
        const id = $event.Dataitem.id

        this.tasksService.eliminarTarea(id);

      }
        break;

    }


  }
}
