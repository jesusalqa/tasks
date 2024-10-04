import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedmoduleRoutingModule } from './sharedmodule-routing.module';
import { TablaComponent } from 'src/app/component-generic/tabla/tabla.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    SharedmoduleRoutingModule,
    FormsModule
  ],
  exports:[
    TablaComponent
  ]
})
export class SharedmoduleModule { }
