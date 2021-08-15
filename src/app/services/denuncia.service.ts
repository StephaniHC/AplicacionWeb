import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CargarDenuncia } from '../interfaces/cargar-denuncias.interfaces';
import { Denuncia } from '../models/denuncia.model';
import { query } from '@angular/animations';
const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  public auth2: any;
  public denuncia: Denuncia;

  constructor( private http: HttpClient) {
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }


  guardarLocalStorage( token: string, menu: any ) {

    localStorage.setItem('token', token );
    localStorage.setItem('menu', JSON.stringify(menu) );

  }

  cargarDenuncias( desde: number = 0, entrada:number = 10, estado : string, sort: number= 1) { 
    const query = this.generarQuery(['estado'],[estado]);
    const url = `${ base_url }/denuncias?desde=${ desde }&entrada=${ entrada }${ query }&sort=${ sort }`;
    return this.http.get<CargarDenuncia>( url, this.headers )
            .pipe(
              map( resp => {
                const denuncias = resp.denuncias.map(
                  denuncia => new Denuncia(denuncia.observacion, denuncia.tipo_denuncia, denuncia.fecha, denuncia.estado, denuncia.calificacion,)
                  );
                  console.log(this.denuncia);
                  console.log(resp);
                return {
                  total: resp.total,
                  denuncias
                };
              })
            )
  }

  generarQuery(names:any,values:any){
    var query = '';
    for (let i = 0; i < values.length; i++) {
      if (values[i] != "todos") {
        query +=`&${names[i]}=${values[i]}`;
      }
    }
    return query
  }

}
