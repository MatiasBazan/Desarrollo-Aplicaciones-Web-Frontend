import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioServiceService } from "src/app/usuario-service.service";

@Component({
  selector: "app-create-espacio-fisico",
  templateUrl: "./create-espacio-fisico.component.html",
  styleUrls: ["./create-espacio-fisico.component.css"],
})
export class CreateEspacioFisicoComponent {
  nuevoEspacio: any = {};
  recursos: any;
  mostrarExito = false;
  mostrarError = false;
  mensajeExito = "";
  mensajeError = "";

  constructor(private http: HttpClient, private service: UsuarioServiceService) {}

  ngOnInit(){
    this.service.getRecursosTecnologicos().subscribe({
      next: (v) => {
        this.recursos = v;
      },
      error: (e) => {
        console.error(e)
      }
    });
  }

  compare(element1: any, element2: any): boolean {
    if(element1 != undefined && element2 != undefined){
      if(element2.id && element1.id){
        return element1.id === element2.id;
      }else{
        return element1 === element2.id;
      }
    }
    return false;
  }

  crearEspacio() {
    // Verificar si los campos requeridos están llenos
    if (
      !this.nuevoEspacio.nombre ||
      !this.nuevoEspacio.descripcion ||
      !this.nuevoEspacio.capacidad
    ) {
      this.mostrarError = true;
      this.mensajeError = "Por favor, completa todos los campos.";
      return;
    }

    // Realizar la solicitud POST al servidor con los datos del nuevo espacio físico
    const url = "http://localhost:8080/espacioFisico"; // Ajusta la URL a tu API del servidor
    this.http.post(url, this.nuevoEspacio).subscribe(
      (response) => {
        console.log(
          "Datos del espacio físico guardados en la base de datos:",
          response
        );
        // Aquí puedes mostrar un mensaje de éxito o realizar otras acciones después de guardar los datos
        // Por ejemplo, redirigir a una página de éxito o actualizar la lista de espacios físicos mostrados en la interfaz.
        this.mostrarExito = true;
        this.mensajeExito = "Datos del espacio físico guardados con éxito.";
        this.nuevoEspacio = {};

        // Ocultar el mensaje de éxito después de 3 segundos (3000 milisegundos)
        setTimeout(() => {
          this.mostrarExito = false;
        }, 3000);
      },
      (error) => {
        console.error("Error al guardar los datos del espacio físico:", error);
        // Aquí puedes mostrar un mensaje de error o realizar otras acciones en caso de fallo
        this.mostrarError = true;
        this.mensajeError = "Error al guardar los datos del espacio físico.";
      }
    );

    // Ocultar el mensaje de error después de 3 segundos (3000 milisegundos)
    setTimeout(() => {
      this.mostrarError = false;
    }, 3000);

    // Limpiar los campos del formulario después de guardar los datos
    this.nuevoEspacio = {};
  }

  // Método para regresar a la ventana anterior
  goBack() {
    window.history.back();
  }
}
