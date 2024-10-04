import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from 'src/app/component-generic/modal/modal.component';
import { FormpersonaComponent } from 'src/app/main/components/personas/formpersona/formpersona.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedmoduleRoutingModule { }
