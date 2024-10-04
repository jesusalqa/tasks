import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona } from '../interface/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
 
  private personasSubject: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([]);
  public personas$: Observable<Persona[]> = this.personasSubject.asObservable(); 

  constructor() {

    const personasIniciales: Persona[] = [
      { nombre: 'Juan Pérez', edad: 30, habilidades: ['JavaScript', 'Angular'] },
      { nombre: 'María Gómez', edad: 25, habilidades: ['HTML', 'CSS'] },
      { nombre: 'Carlos Díaz', edad: 35, habilidades: ['Java', 'Spring'] },
      { nombre: 'Ana López', edad: 28, habilidades: ['Python', 'Django'] },
      { nombre: 'Luis Rodríguez', edad: 40, habilidades: ['SQL', 'Tuning'] }
    ];

    this.personasSubject.next(personasIniciales);
  }

  //agregar una persona
  agregarPersona(persona: Persona): void {
    const personasActuales = this.personasSubject.getValue(); 
    const nuevasPersonas = [...personasActuales, persona]; 
    this.personasSubject.next(nuevasPersonas); 
  }

 //eliminar una persona 
  eliminarPersona(index: string): void {
    const personasActuales = this.personasSubject.getValue();
    const nuevasPersonas = personasActuales.filter((x, i) => x.nombre !== index); 
    this.personasSubject.next(nuevasPersonas); 
  }

  
  obtenerPersonas(): Observable<Persona[]> {
    return this.personas$;
  }

  
  limpiarPersonas(): void {
    this.personasSubject.next([]); 
  }
}
