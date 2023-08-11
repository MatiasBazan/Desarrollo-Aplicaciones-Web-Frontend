import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) {}

  apiURL = "http://localhost:8080/reserva";
  apiURL1= "http://localhost:8080/solicitantes'"

  crearReservas(nuevaReserva: any) {
    return this.http.post(this.apiURL, nuevaReserva);
  }

  getEspaciosFisicos(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/espacioFisico');
  }

  getSolicitantes(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/solicitantes');
  }

  obtenerDatos(solicitante: string): Observable<any> {
    let filters = '';
    if (solicitante) {
      filters = '?Solicitante=' + solicitante;
    }
    return this.http.get<any>(this.apiURL + filters);
  }
  

  eliminarReservas(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }

  editarReservas(id: string, Reserva: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${id}`, Reserva);
  }

  getReservas(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }


}
