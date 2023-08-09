import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EspacioFisicoComponent } from "./espacio-fisico/espacio-fisico.component";
import { CreateEspacioFisicoComponent } from "./espacio-fisico/create-espacio-fisico/create-espacio-fisico.component";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UsuarioServiceService {
  apiURL = "http://localhost:8080/espacioFisico";

  constructor(private http: HttpClient) {}

  crearEspacioFisico(nuevoEspacioFisico: any) {
    return this.http.post(this.apiURL, nuevoEspacioFisico);
  }

  getRecursosTecnologicos(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/recursos');
  }

  obtenerDatos(name: string, capacity: number): Observable<any> {
    let filters = '';
    if(name){
      filters = '?nombre='+name;
    }
    if(capacity && capacity>=0){
      if(!name){
        filters += '?';
      }else{
        filters += '&';
      }
      filters += 'capacidad='+capacity;
    }
    return this.http.get<any>(this.apiURL+filters);
  }

  eliminarEspacioFisico(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }

  editarEspacioFisico(id: string, espacioFisico: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${id}`, espacioFisico);
  }

  getEspacioFisic0(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

}
