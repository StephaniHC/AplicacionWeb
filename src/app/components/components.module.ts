import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { BarraComponent } from './barra/barra.component';
import { LineaComponent } from './linea/linea.component';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    BarraComponent,
    LineaComponent,
    ModalImagenComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    BarraComponent,
    LineaComponent,
    ModalImagenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
