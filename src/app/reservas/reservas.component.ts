import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  datos: any = [];
  reservas: any;
  nombreFiltro: string = "";
  displayedColumns: string[] = ['espacioFisico','solicitante','fechaInicio','fechaFin','actions'];
  dataSource!: MatTableDataSource<any>;
  // Nuevas propiedades para la funcionalidad de edición
  editingReservas: boolean = false;
  reservasEditado: any = {}; // Agrega esta línea
  isSidenavOpen: boolean = false;

  constructor(private reservasService: ReservasService) {


  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  
  ngOnInit() {
    this.obtenerDatos();
  }


 




  obtenerDatos() {
    this.reservasService.obtenerDatos(this.nombreFiltro).subscribe(
      (response) => {
        console.log(response);
        this.datos = response;
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );
  }

  aplicarFiltro() {
    // Aplicar el filtro solo si hay un nombreFiltro válido
    if (this.nombreFiltro.trim() !== '') {
      this.obtenerDatos(); // Llama a obtenerDatos() para aplicar el filtro
    }
  }




  eliminarReservas(id: string) {

    // Mostrar mensaje de confirmación al usuario
  const confirmacion = window.confirm("¿Estás seguro de eliminar esta reserva?");

  // Si el usuario confirma, proceder con la eliminación
  if (confirmacion) {

    this.reservasService.eliminarReservas(id).subscribe(
      () => {
        console.log("Espacio físico eliminado correctamente.");
        this.obtenerDatos(); // Recarga la lista de datos después de eliminar
      },
      (error) => {
        console.error("Error al eliminar espacio físico:", error);
      }
    );
  }
  }


}

