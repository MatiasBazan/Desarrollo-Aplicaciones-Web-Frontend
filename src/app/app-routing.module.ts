import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacioFisicoComponent } from './espacio-fisico/espacio-fisico.component';
import { CreateEspacioFisicoComponent } from './espacio-fisico/create-espacio-fisico/create-espacio-fisico.component';
import { EditarEspacioFisicoComponent } from './espacio-fisico/editar-espacio-fisico/editar-espacio-fisico.component'; // Asegúrate de tener esta importación

const routes: Routes = [
  { path: '', redirectTo: 'espacios', pathMatch: 'full' },
  { path: 'espacios', component: EspacioFisicoComponent },
  { path: 'espacios/new', component: CreateEspacioFisicoComponent },
  { path: 'espacios/edit/:id', component: EditarEspacioFisicoComponent }, // Asegúrate de que la ruta tenga un parámetro "id"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
