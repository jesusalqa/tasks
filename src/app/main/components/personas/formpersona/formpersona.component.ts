import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedmoduleRoutingModule } from 'src/app/core/sharedmodule/sharedmodule-routing.module';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PersonaService } from 'src/app/component-generic/services/persona.service';
import { Persona } from 'src/app/component-generic/interface/persona';

@Component({
  selector: 'app-formpersona',
  standalone: true,
  imports: [CommonModule, SharedmoduleRoutingModule, ReactiveFormsModule, FormsModule],
  templateUrl: './formpersona.component.html',
  styleUrls: ['./formpersona.component.scss']
})
export class FormpersonaComponent {

  public personas: { nombre: string; edad: number; habilidades: string[] }[] = [];
  personaForm: FormGroup;

  constructor(private fb: FormBuilder,
    private personaService: PersonaService) {
    this.personaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required, Validators.min(18)]],
      habilidad: [''],
      habilidades: this.fb.array([])
    });
  }

  get habilidades() {
    return this.personaForm.get('habilidades') as FormArray;
  }

  agregarHabilidad() {
    const habilidadControl = this.personaForm.get('habilidad')?.value;
    
    const id =  this.habilidades.controls.some(s => s.value == habilidadControl)
  
    if (habilidadControl && habilidadControl.length > 0) {

      if(!id){

         this.habilidades.push(this.fb.control(habilidadControl, Validators.required));
      this.personaForm.get('habilidad')?.reset(); 
      }
     
    }
  }

  agregarPersona() {
    if (this.personaForm.valid) {
      // Agregar lógica para guardar la persona

      const persona: Persona = {
        nombre: this.personaForm.value.nombre,
        edad: this.personaForm.value.edad,
        habilidades: this.habilidades.controls.map(control => control.value)
      };


      this.personaService.agregarPersona(persona);
    
     // this.personas.push(this.personaForm.value);
      this.personaForm.reset();
      // Restablecer el FormArray
      this.habilidades.clear();
    } else {
      console.log('El formulario no es válido', this.personaForm.errors);
    }
  }

  eliminarHabilidad(index: number) {
    this.habilidades.removeAt(index);
  }
}
