import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacioFisicoComponent } from './espacio-fisico/espacio-fisico.component';
import { CreateEspacioFisicoComponent } from './espacio-fisico/create-espacio-fisico/create-espacio-fisico.component';
import { EditarEspacioFisicoComponent } from './espacio-fisico/editar-espacio-fisico/editar-espacio-fisico.component'; // Asegúrate de tener esta importación
import { ReservasComponent } from './reservas/reservas.component';
import { CreateReservaComponent } from './reservas/create-reserva/create-reserva.component';
import { EditarReservasComponent } from './reservas/editar-reserva/editar-reserva.component';

const routes: Routes = [
  { path: '', redirectTo: 'espacios', pathMatch: 'full' },
  { path: 'espacios', component: EspacioFisicoComponent },
  { path: 'espacios/new', component: CreateEspacioFisicoComponent },
  { path: 'espacios/edit/:id', component: EditarEspacioFisicoComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'reservas/new', component: CreateReservaComponent },
  { path: 'reservas/edit/:id', component: EditarReservasComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
