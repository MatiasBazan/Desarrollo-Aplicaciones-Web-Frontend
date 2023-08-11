import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspacioFisicoComponent } from './espacio-fisico/espacio-fisico.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './espacio-fisico/pagination/pagination.component';
import { CreateEspacioFisicoComponent } from './espacio-fisico/create-espacio-fisico/create-espacio-fisico.component';
import { FormsModule } from '@angular/forms';
import { EditarEspacioFisicoComponent } from './espacio-fisico/editar-espacio-fisico/editar-espacio-fisico.component';
import { UsuarioServiceService } from './usuario-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservasService } from './reservas.service';
import { CreateReservaComponent } from './reservas/create-reserva/create-reserva.component';
import { EditarReservasComponent } from './reservas/editar-reserva/editar-reserva.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EspacioFisicoComponent,
    PaginationComponent,
    CreateEspacioFisicoComponent,
    EditarEspacioFisicoComponent,
    ReservasComponent,
    CreateReservaComponent,
    EditarReservasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
  ],
  providers: [
    UsuarioServiceService,
    ReservasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
