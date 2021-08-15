import { environment } from '../../environments/environment';

export class Denuncia {

    constructor(
        public observacion: string,
        public tipo_denuncia: string,
        public fecha?: string,
        public estado?: string, 
        public calificacion?: string
    ) {}


}

