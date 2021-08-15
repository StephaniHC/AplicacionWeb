import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

import { Usuario } from '../models/usuario.model';

<<<<<<< HEAD
import { Denuncia } from '../models/denuncia.model';
=======
>>>>>>> fe6cbd01252d700c8ce887366cba71b87e43f895

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient ) { }

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

  private transformarUsuarios( resultados: any[] ): Usuario[] {

    return resultados.map(
      user => new Usuario(user.nombre, user.email, '', user.img, user.google, user.role, user.uid,user.createdAt, user.estado )
    );
  }


<<<<<<< HEAD

  private transformarDenuncia( resultados: any[] ): Denuncia[] {

    return resultados.map(
      denuncia => new Denuncia(denuncia.oficial, denuncia.civil, denuncia.fecha, denuncia.calificacion, denuncia.estado )
    );
  }
=======
>>>>>>> fe6cbd01252d700c8ce887366cba71b87e43f895

  busquedaGlobal( termino: string ) {

    const url = `${ base_url }/todo/${ termino }`;
    return this.http.get( url, this.headers );

  }


  buscar(
      tipo: 'usuarios'|'medicos'|'hospitales'|'fotografos'|'estudios'|'eventos'|'denuncia',
      termino: string
    ) {

    const url = `${ base_url }/todo/coleccion/${ tipo }/${ termino }`;
    return this.http.get<any[]>( url, this.headers )
            .pipe(
              map( (resp: any ) => {

                switch ( tipo ) {
                  case 'usuarios':
                    return this.transformarUsuarios( resp.resultados )

<<<<<<< HEAD
                  case 'denuncia':
                  return this.transformarDenuncia( resp.resultados )
=======

>>>>>>> fe6cbd01252d700c8ce887366cba71b87e43f895
                  default:
                    return [];
                }

              })
            );

  }


}
