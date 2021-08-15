import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component'; 
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';

// Mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';

import { BusquedaComponent } from './busqueda/busqueda.component';
<<<<<<< HEAD
import { AdminGuard } from '../guards/admin.guard'; 
import { DenunciasComponent } from './mantenimientos/denuncias/denuncias.component'; 
=======
import { AdminGuard } from '../guards/admin.guard';
>>>>>>> fe6cbd01252d700c8ce887366cba71b87e43f895
import { RegisterOficialComponent } from './mantenimientos/usuarios/register_oficial.component';


const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'dashboard' } },
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
  { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busquedas' }},
  { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Reporte' }}, 
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
  { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }},
  { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},

  // Mantenimientos

  // Rutas de Admin
  { path: 'usuarios', canActivate: [ AdminGuard ], component: UsuariosComponent, data: { titulo: 'Matenimiento de Usuarios' }},
<<<<<<< HEAD
  { path: 'denuncias', canActivate: [ AdminGuard ], component: DenunciasComponent, data: { titulo: 'Matenimiento de Denuncia' }},
=======
>>>>>>> fe6cbd01252d700c8ce887366cba71b87e43f895
  { path: 'oficial', canActivate: [ AdminGuard ], component: RegisterOficialComponent, data: { titulo: 'Manteniniento de Ususarios' }},
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
