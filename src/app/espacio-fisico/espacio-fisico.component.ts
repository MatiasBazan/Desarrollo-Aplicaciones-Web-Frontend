import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioServiceService } from "../usuario-service.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from "@angular/material/sort";
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: "app-espacio-fisico",
  templateUrl: "./espacio-fisico.component.html",
  styleUrls: ["./espacio-fisico.component.css"],
})
export class EspacioFisicoComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  datos: any = [];
  espacio: any;
  nombreFiltro: string = "";
  capacidadFiltro!: number;
  displayedColumns: string[] = ['nombre', 'descripcion', 'capacidad','recursos','actions'];
  dataSource!: MatTableDataSource<any>;
  // Nuevas propiedades para la funcionalidad de edición
  editingEspacioFisico: boolean = false;
  espacioFisicoEditado: any = {}; // Agrega esta línea
  isSidenavOpen: boolean = false;


  constructor(private usuarioService: UsuarioServiceService) {


  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  
  ngOnInit() {
    this.obtenerDatos();
  }





  obtenerDatos() {
    this.usuarioService.obtenerDatos(this.nombreFiltro, this.capacidadFiltro).subscribe(
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

  eliminarEspacioFisico(id: string) {

    // Mostrar mensaje de confirmación al usuario
  const confirmacion = window.confirm("¿Estás seguro de eliminar este espacio físico?");

  // Si el usuario confirma, proceder con la eliminación
  if (confirmacion) {

    this.usuarioService.eliminarEspacioFisico(id).subscribe(
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


