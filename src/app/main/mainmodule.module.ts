import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PersonasComponent } from './components/personas/personas.component';
import { SharedmoduleModule } from '../core/sharedmodule/sharedmodule.module';
import { ModalComponent } from "../component-generic/modal/modal.component";
import { FormpersonaComponent } from "./components/personas/formpersona/formpersona.component";
import { FormTasksComponent } from './components/tasks/form-tasks/form-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    TasksComponent,
    PersonasComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    MainmoduleRoutingModule,
    SharedmoduleModule,
    ModalComponent,
    FormpersonaComponent,
    FormTasksComponent
   
     
],exports:[
    
  ]
})
export class MainmoduleModule { }
