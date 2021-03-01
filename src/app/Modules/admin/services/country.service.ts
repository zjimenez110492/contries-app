import { Country } from './../../../models/country.model';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/** Constants used to fill up our data base. */

  const RUTA="https://restcountries.eu/rest/v2/";
@Injectable({
  providedIn: 'root'
})


export class CountryService {

constructor( private http: HttpClient) { }
id = 0;
cump=0;

getAllCountries(): Observable<any> {
  console.log("RUTA:   ",RUTA+'all');
  return this.http.get(RUTA+'all');
}
/* crearActividad(id: number): Actividad {

  const sem = SEMANAS[Math.round(Math.random() * (SEMANAS.length - 1))];
  const entr = ENTREGAS[Math.round(Math.random() * (ENTREGAS.length - 1))];
  const compr = COMPROMISOS[Math.round(Math.random() * (COMPROMISOS.length - 1))];
  const fi = FECHAS[Math.round(Math.random() * (FECHAS.length - 1))];
  const fe = FECHAS[Math.round(Math.random() * (FECHAS.length - 1))];
    this.id += 1;
    const identificador = this.id;
    if(this.cump==0)
    this.cump=1;
    else this.cump=0;
    console.log("FECHAAAA:  ",fi);
    return {
      id:this.id,
    semana:sem,
    fecha_inicio: new Date(fi),
    fecha_entrega: new Date(fe),
    entregas: entr,
    compromisos: compr,
    cumplido: this.cump,
    visibilidad:1-this.cump
    };
  } */


}
