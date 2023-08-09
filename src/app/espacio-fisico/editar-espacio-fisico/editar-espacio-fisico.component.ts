import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsuarioServiceService } from "src/app/usuario-service.service";


@Component({
  selector: 'app-editar-espacio-fisico',
  templateUrl: './editar-espacio-fisico.component.html',
  styleUrls: ['./editar-espacio-fisico.component.css'],
})



export class EditarEspacioFisicoComponent implements OnInit {

  espacioFisicoEditado: any = {}; // Puedes inicializarlo con un objeto vacío o con los datos que desees
  espacioId:any;
  recursos: any;

  constructor(
    private route: ActivatedRoute,
    @Inject(UsuarioServiceService) private usuarioService: UsuarioServiceService
  ) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.espacioId = params.get('id');
      if (this.espacioId) { // Verifica si espacioId no es nulo
        this.usuarioService.getEspacioFisic0(this.espacioId).subscribe(
          (data) => {
            this.espacioFisicoEditado=data;
          },
          (error: any) => {
            console.error("Error al actualizar espacio físico:", error);
          }
        );
      } else {
        console.error("El ID del espacio físico es nulo.");
      }
    });


    this.usuarioService.getRecursosTecnologicos().subscribe({
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
  

  guardarCambios() {
    this.usuarioService.editarEspacioFisico(this.espacioId, this.espacioFisicoEditado).subscribe(
      () => {
        this.goBack();
        console.log("Espacio físico actualizado correctamente.");
        // Puedes realizar acciones adicionales después de la actualización si lo deseas
      },
      (error: any) => {
        console.error("Error al actualizar espacio físico:", error);
      }
    );
  }
  
  

  cancelarEdicion() {
    this.goBack();
  }

  goBack() {
    window.history.back();
  }



}





