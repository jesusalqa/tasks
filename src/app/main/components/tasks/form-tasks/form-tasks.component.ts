import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Persona } from 'src/app/component-generic/interface/persona';
import { Task } from 'src/app/component-generic/interface/task';
import { PersonaService } from 'src/app/component-generic/services/persona.service';
import { TasksService } from 'src/app/component-generic/services/tasks.service';
import { SharedmoduleRoutingModule } from 'src/app/core/sharedmodule/sharedmodule-routing.module';

@Component({
  selector: 'app-form-tasks',
  standalone: true,
  imports: [CommonModule, SharedmoduleRoutingModule, ReactiveFormsModule, FormsModule],

  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.scss']
})
export class FormTasksComponent {


  taskForm: FormGroup;

  personas: Persona[] = [];

  constructor(private personaService: PersonaService,
    private fb: FormBuilder,
    private tasksService: TasksService) {
    this.taskForm = this.fb.group({
      title: [null,Validators.required,Validators.minLength(5)],
      completed: [false],
      fechaLimite: [null,Validators.required], 
      persona: [null] ,
      personass: this.fb.array([])
    });
  }

  ngOnInit(): void {
   
   


    this.personaService.obtenerPersonas().subscribe(s =>{

      this.personas = s;
    })
  }


  get personass() {
    return this.taskForm.get('personass') as FormArray;
  }


  agregarPersona() {
    const personaControl = this.taskForm.get('persona')?.value; // Obtiene el objeto persona completo
  
    
    if (personaControl) {
      
    const id =  this.personass.controls.some(s => s.value == personaControl)
     if(!id){
      this.personass.push(this.fb.control(personaControl, Validators.required));
        this.taskForm.get('persona')?.setValue("") ; 
     }
        
    
    }


  }
  eliminarPersona(index: number) {
    this.personass.removeAt(index); // Elimina el control del FormArray
  }

  submitTask() {
    const task: Task = {
      id: Date.now(), 
      title: this.taskForm.value.title,
      completed: this.taskForm.value.completed,
      deadline: this.taskForm.value.fechaLimite,
      personas: this.personass.controls.map(control => control.value)
    };

    this.tasksService.agregarTarea(task);
    this.taskForm.reset(); 
    this.personass.clear();
  }

}
