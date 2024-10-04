import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { PersonasComponent } from './components/personas/personas.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ModalComponent } from '../component-generic/modal/modal.component';
import { FormpersonaComponent } from './components/personas/formpersona/formpersona.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: 'tasks',
      component: TasksComponent
    },
    {
      path: 'personas',
      component: PersonasComponent
    },
   
    ]

  },






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule { }
