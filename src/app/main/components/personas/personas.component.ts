import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/component-generic/interface/persona';
import { PersonaService } from 'src/app/component-generic/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {

  public personas$: Observable<Persona[]>;
  public arrycolumn: any = [];

  public arrayEventos: any[] = [];

  constructor(private personaService: PersonaService) {

    this.personas$ = this.personaService.obtenerPersonas();

    this.arrycolumn = [{
      namekey: "nombre",
      title: "Nombre"

    },
    {
      namekey: "edad",
      title: "Edad"

    },
    {
      namekey: "habilidades",
      title: "Habilidades"

    }

    ]


    this.arrayEventos = [
      //  {nameBotton:"actulizar",      titleBotton:"Actulizar",      accionBotton:"actulizar",      classBotton:"btn-primary"    },
      {
        nameBotton: "Eliminar",
        titleBotton: "Eliminar",
        accionBotton: "eliminar",
        classBotton: "btn-danger"
      },
      //  {   nameBotton:"cambiarestado",      titleBotton:"Cambiar Estado",      accionBotton:"cambiarestado",      classBotton:"btn-warning"    }
    ]

  }


  getEventTabla($event: any) {

    switch ($event.accion) {
      case "eliminar": {
        const id = $event.Dataitem.nombre

        this.personaService.eliminarPersona(id);

      }
        break;

    }

  }


}
