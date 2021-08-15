import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PipesModule } from '../pipes/pipes.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component'; 
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

import { RegisterOficialComponent } from './mantenimientos/usuarios/register_oficial.component';


import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component, 
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
    UsuariosComponent,
    RegisterOficialComponent,
    // HospitalesComponent,
    // MedicosComponent,
    // MedicoComponent,
    BusquedaComponent,

  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component, 
    PagesComponent,
    AccountSettingsComponent,
    RegisterOficialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    PipesModule,


    CdkStepperModule,
    MatStepperModule,
    MatSliderModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    NgxDropzoneModule,
  ]
})
export class PagesModule { }
