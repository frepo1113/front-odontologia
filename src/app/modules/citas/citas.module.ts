import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { RegitrarCitasComponent } from './regitrar-citas/regitrar-citas.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';


@NgModule({
  declarations: [
    RegitrarCitasComponent,
    ListarCitasComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
