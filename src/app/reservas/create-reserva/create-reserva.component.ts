import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ReservasService } from 'src/app/reservas.service';
import { MatDatepickerPanel } from '@angular/material/datepicker';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.css']
})
export class CreateReservaComponent implements OnInit {
  reservaForm: FormGroup;
  dateControl: FormControl;
  solicitantes: any[] = [];
  espaciosFisicos: any[] = [];
  reservasId: any = null;

  @ViewChild('picker') pickerFechaInicio: any;
  @ViewChild('picker') pickerFechaFin: any;

  public date!: moment.Moment;
  public minDate: moment.Moment;

  constructor(
    private fb: FormBuilder,
    private reservasService: ReservasService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.reservaForm = new FormGroup({});
    this.reservaForm.addControl('solicitante', new FormControl([1], [Validators.required]));
    this.reservaForm.addControl('espacioFisico', new FormControl(''));
    this.reservaForm.addControl('fechaInicio', new FormControl(moment()));
    this.reservaForm.addControl('fechaFin', new FormControl(''));


    this.dateControl = new FormControl(); 

    
    this.minDate = moment();
  }

  async ngOnInit() {
    this.reservasService.getSolicitantes().subscribe(
      (data) => {
        this.solicitantes = data;
      },
      (error: any) => {
        console.error('Error al cargar los Solicitantes:', error);
      });

      this.reservasService.getEspaciosFisicos().subscribe(
        (data) => {
          this.espaciosFisicos = data;
        },
        (error: any) => {
          console.error('Error al cargar los Espacios Físicos:', error);
        });

  }
  



  submitForm() {
    const reservaData = this.reservaForm.value;
    reservaData.espacioFisico = reservaData.espacioFisico.id;
    reservaData.solicitante = reservaData.solicitante.id;

    this.reservasService.crearReservas(reservaData).subscribe(
      (data) => {
          this.router.navigate(['/reservas']);
      },
      (error: any) => {
        alert(error.error.message);
        
      });
  }

  compareElements(element1: any, element2: any): boolean {
    if(element1 != undefined && element2 != undefined){
      if(element1.id){
        return element1.id === element2.id;
      }else{
        return element1 === element2.id;
      }
    }else{
      return false;
    }
  }

}