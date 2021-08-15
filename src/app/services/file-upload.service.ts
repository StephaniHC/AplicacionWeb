import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }


  async actualizarFotos(
    archivo: Array<File>,
    tipo: 'usuarios'|'eventos',
    dir: 'img'|'galeria',
    id: string
  ) {

    try {

      const url = `${ base_url }/uploads/${ tipo }/${dir}/${ id }`;
      const formData = new FormData();
      for (let i = 0; i < archivo.length; i++) {
        formData.append('imagen',archivo[i]);
      }

      const resp = await fetch( url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      });

      const data = await resp.json();

      if ( data.ok ) {
        return data.nombreArchivos;
      } else {
        return false;
      }

    } catch (error) {
      return false;
    }

  }

  async actualizarFoto(
    archivo: File,
    tipo: 'usuarios',
    id: string
  ) {


    try {
      const url = `${ base_url }/uploads/${ tipo }/${ id }`;
      const formData = new FormData();
      formData.append('imagen', archivo);

      const resp = await fetch( url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || '',
        },
        body: formData
      });

      const data = await resp.json();

      if ( data.ok ) {

        return data.nombreArchivo;
      } else {
        console.log(data.msg);
        return false;
      }

    } catch (error) {
      console.log(error);
      return false;
    }

  }




}
