import { Component, OnInit } from '@angular/core';

import { Denuncia } from '../../../models/denuncia.model';
import { BusquedasService } from '../../../services/busquedas.service';
import { DenunciaService } from '../../../services/denuncia.service';
@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html'
})
export class DenunciasComponent implements OnInit {
  public totalDenuncias: number = 0;
  public denuncias: Denuncia[] = [];
  public denunciasTemp: Denuncia[] = [];
  public desde: number = 0;
  public entrada: number = 10;
  public sort: number = -1;
  public cargando: boolean = true;
  public estado : string = "todos";

  constructor( private denunciaService: DenunciaService,
    private busquedasService: BusquedasService ) { }
  ngOnInit(): void {
    this.cargarDenuncias();
    console.log(this.cargarDenuncias());

  }
  cargarDenuncias() {
    this.cargando = true;
    this.denunciaService.cargarDenuncias( this.desde, this.entrada, this.estado, this.sort)
      .subscribe( ({ total, denuncias }) => {
        console.log(denuncias);

        this.totalDenuncias = total;
        this.denuncias = denuncias;
        this.denunciasTemp = denuncias;
        this.cargando = false;
    })
  }

  cambiarPagina( valor: number ) {
    this.desde += valor;

    if ( this.desde < 0 ) {
      this.desde = 0;
    } else if ( this.desde >= this.totalDenuncias ) {
      this.desde -= valor;
    }

    this.cargarDenuncias();
  }

  buscar( termino: string ) {

    if ( termino.length === 0 ) {
      return this.denuncias = this.denunciasTemp;
    }

    this.busquedasService.buscar( 'denuncia', termino )
        .subscribe( (resp: Denuncia[]) => {

          this.denuncias = resp;

        });
  }
}
